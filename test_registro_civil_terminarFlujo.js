//este script selecciona registros del listado de tareas del funcionario administrativo y termina el flujo

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), By = webdriver.By,  until = webdriver.until, Key = webdriver.Key, select = webdriver.select;
var driver = new webdriver.Builder().forBrowser('chrome').build();

// cantidad a iterar
var cantidad=1;

// Register general error handler
process.on('uncaughtException', function(err) {
console.log("El test ha encontrado errores: " + err);
	
// Take screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});

// COMIENZO DEL SCRIPT 

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

//ciclo que permite repertir la ejecución de la aprobación de tareas del abogado
for(var x=0;x<cantidad;x++){
	
// Indicar ruta de aplicación
driver.get('http://prendascert.srcei.cl/srpsdcert/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('funupadminivo1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123',webdriver.Key.TAB);     
driver.sleep(3000);

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
driver.sleep(5000);

// selecciona el primer registro de la lista
driver.sleep(3000);
driver.findElement(By.className('x-grid3-cell-inner x-grid3-col-repertorioPrendas')).then(function(elem){
driver.actions().doubleClick(elem).perform();
});

// Adjuntar y subir archivo pdf
driver.sleep(3000);
driver.findElement(By.id("contrato-file-file")).sendKeys('C:\\Users\\Usuario\\Downloads\\SRPSDManualdeUsuarioOficinasdeAtencionIntegral.pdf');
driver.sleep(3000);
//driver.findElement(By.id('ext-gen199')).click(); 
driver.findElement(By.xpath("//button[contains(.,'Subir Contrato')]")).click();

// Presionar el botón terminar
driver.sleep(3000);
driver.findElement(By.id('ext-gen148')).click();     
driver.sleep(3000);

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(3000);
//driver.findElement(By.id('ext-gen375')).click(); 
driver.findElement(By.xpath("//button[contains(.,'Sí')]")).click();
driver.sleep(3000);
}