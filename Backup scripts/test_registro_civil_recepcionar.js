//TEST_registro_civil_recepcionar

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), By = webdriver.By,  until = webdriver.until, Key = webdriver.Key, select = webdriver.select;
var driver = new webdriver.Builder().forBrowser('chrome').build();

// Register general error handler
process.on('uncaughtException', function(err) {
console.log("El test ha encontrado errores: " + err);
	
// Take screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});

var desde=488;
var hasta=488;
var anio=2018;

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso //

//ciclo que permite repertir la ejecución del ingreso incrementando el número de repertorio y ingresando un run en sección acreedor

// Indicar ruta de aplicación
driver.sleep(3000);
driver.get('http://prendascert.srcei.cl/srpsdcert/#');
//driver.sleep(3000);
//driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('funupingresa1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123',webdriver.Key.TAB);     
driver.sleep(2000);

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();

// Para seleccionar nueva inscripción 
driver.sleep(3000);
driver.findElement(By.id('RECEPCIONAR')).click();

// Ciclo que permite 
for(var x=desde; x<=hasta;x++){

var nPrenda=""+x+""+anio+"0";
while(nPrenda.length<12){
nPrenda="0"+nPrenda;
}
console.log(" recepcionar = "+nPrenda);
	
// Ingresar reporterio
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='numeroRepertorioPrendas']")).sendKeys(nPrenda, webdriver.Key.ENTER);
driver.sleep(3000);

// Chequear repertorio
driver.findElement(By.xpath("//*[@class='x-grid3-row-checker']")).click();

// Botón Recepcionar 
driver.sleep(2000);
driver.findElement(By.id('ext-gen139')).click();

// Botón aceptar 
driver.sleep(2000);
driver.findElement(By.id('ext-gen197')).click();

//Botón remover 
driver.sleep(2000);
driver.findElement(By.id('ext-gen176')).click();

// LogOut
//driver.findElement(By.id('logout')).click();
//driver.sleep(2000);
//driver.findElement(By.id('ext-gen199')).click(); 
//driver.sleep(3000);
}
