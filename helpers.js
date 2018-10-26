var fs = require('fs');
var path = require('path');

var currentFileCounter = 1;
var helpers = function() {

	return {
		// Define helper functions
		saveImage: function(file, currentDateTime, errMessage) {
			var fileName = path.basename(file);
			var filePath = path.dirname(file) + '/';
			var finalFile = filePath + currentDateTime + '-' + currentFileCounter + "-" + fileName + '.png';
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
		}
	};
};

module.exports = helpers();

