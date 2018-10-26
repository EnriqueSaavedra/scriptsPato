//TEST_1

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
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
var tiempoEsperaTest = 1000;

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

// Espera un tiempo, y valida título de página (Consulta)
driver.wait(until.titleIs('Consulta'), tiempoEsperaTest );	

// Para capturar un screenshot
//driver.takeScreenshot().then(saveImage('C:\Test_Selenium\scripts\evidencias_pruebas',  currentDateTime, 'Error en screenshot para página de Login.')); 

// Para campo RutUsuario
driver.findElement(By.id('runPersona')).sendKeys('18.234.567-9');

// Para capturar un screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/evidencias_pruebas/login',  currentDateTime, 
'Error en screenshot para página de Login.')); 

// Para botón consultar
driver.findElement(By.id('consultar')).click();

// Verificar que la fecha de nacimiento es la esperada
driver.findElement(By.id('consultado')).getText().then(function(text) {
assert.equal(text.substr(text.length - 10), '25/11/1980');
});

//Para ubicar menu reclamos
driver.findElement(By.partialLinkText("Ingreso de reclamos")).click();

//Validar RUT de la primera fila de la Tabla Causales  // *solicitar id para las tablas
driver.findElement(By.xpath('//*[@id="TablaDeCausales"]/tbody/tr[1]/td[1]')).getText().then(function(text) {
assert.equal(text, '15.204.543-6');
});

//*[@id="TablaDeCausales"]/tbody/tr[1]/td[2]/span
driver.findElement(By.xpath('//*[@id="TablaDeCausales"]/tbody/tr[1]/td[2]')).getText().then(function(text) {
assert.equal(text.trim(), 'Pagado');
});