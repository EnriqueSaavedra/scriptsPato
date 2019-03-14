var fs = require('fs');
var path = require('path');
var webdriver = require("selenium-webdriver"),
	By = webdriver.By,
	until = webdriver.until;

var currentFileCounter = 1;
var parentWindow;

var helpers = function() {

	return {
		// Define helper functions
		saveImage: function(file, currentDateTime, errMessage, mustAddErrorSuffix) {
			var fileName = path.basename(file);
			var filePath = path.dirname(file) + '/';
			var finalFile = filePath + fileName + '-' + currentDateTime + (mustAddErrorSuffix ? '-error' : '') + '.png';
			currentFileCounter++;
			
			return function(image, errImage){
				if (errImage){
					console.log("Error al capturar screenshot: " + errMessage + ": " + errImage);
				} else {
					try{
		        		console.log("Generando screenshot: " + finalFile);
						fs.writeFileSync(finalFile, image, 'base64');
					} catch(errFile){
		                console.log("Error al generar archivo con screenshot: " + errMessage + ": " + errFile);
					}
				}
			};
		},

		getCurrentDateTime: function(){
			return new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().substring(0, 19).replace(/:/gi,'-').replace('T','_');
		},
		
		getVisibleElementWaiting: function(driver, locator, optTimeoutMs, optErrMessage){
			return driver.wait(until.elementIsVisible(driver.wait(until.elementLocated(locator), optTimeoutMs, optErrMessage)), optTimeoutMs, optErrMessage);
		},
		
		checkNotExistsElement: function(driver, locator, optTimeoutMs, optErrMessage){
			driver.findElements(locator).then(function(result){
				if (result && result.length > 0){
					throw optErrMessage;
				}
			});
		},
		
		doubleClick: function(driver, locatorExpressionType, locatorExpression){
			driver.then(function(){
				driver.executeScript(
					function(locatorExpressionType, locatorExpression){
						var event = new MouseEvent('dblclick', {
						    'view': window,
						    'bubbles': true,
						    'cancelable': true
						  });
						
						if (locatorExpressionType === 'xpath'){
							document.evaluate(locatorExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.dispatchEvent(event);	
						} else if (locatorExpressionType === 'css'){
							document.querySelector(locatorExpression).dispatchEvent(event);
						} else if (locatorExpressionType === 'id'){
							document.getElementById(locatorExpression).dispatchEvent(event);
						}						
					}, locatorExpressionType, locatorExpression);
			});
		},
		
		switchToChildWindow: function(driver){
			driver.then(function(){
				driver.getAllWindowHandles().then(function(result){
					var parent = result[0];
					var child = result[1];
					
					parentWindow = parent;
					driver.switchTo().window(child);
				});
			});
		},

		switchToParentWindow: function(driver){
			driver.then(function(){
				if (typeof(parentWindow) !== 'undefined' && parentWindow !== null){
					driver.switchTo().window(parentWindow);
				} else {
					throw "No se tiene una referencia valida a la ventana padre para poder cambiar el contexto hacia ella.";
				}
			});
		},
		
		exit: function(){
			setTimeout(function(){
				process.exit(1);
			}, 2000);
		},
		
		getFilename: function(fullFilename){
			return path.basename(fullFilename);
		}
	};
};

module.exports = helpers();

