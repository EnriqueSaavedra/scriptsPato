//TEST_1

// Importar objetos de selenium
var helpers = require('./helpers');
var webdriver = require('selenium-webdriver'), By = webdriver.By,  until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

// Register general error handler
process.on('uncaughtException', function(err) {
	console.log("El test ha encontrado errores: " + err);
	
    // Take screenshot
    driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Indicar ruta de aplicación
driver.get('http://localhost:8081');

// Para campo Usuario
driver.findElement(By.id('usuario')).sendKeys('abc');

// Para campo Password
driver.findElement(By.name('password')).sendKeys('123');

// Para campo check
driver.findElement(By.id('aceptarTerminos')).click();

// Para capturar un screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/evidencias_pruebas/login',  currentDateTime, 
'Error en screenshot para página de Login.')); 

// Para botón ingresar
driver.findElement(By.xpath("//input[@type='submit']")).click();

// Para capturar un screenshot
//driver.takeScreenshot().then(saveImage('C:\Test_Selenium\scripts\evidencias_pruebas',  currentDateTime, 'Error en screenshot para página de Login.')); 









