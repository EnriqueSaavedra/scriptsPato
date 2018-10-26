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

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso //

//ciclo que permite repertir la ejecución del ingreso incrementando el número de repertorio y ingresando un run en sección acreedor

// Indicar ruta de aplicación
driver.sleep(3000);
driver.get('http://prendascert.srcei.cl/srpsdcert/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('funupabo1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123',webdriver.Key.TAB);     
driver.sleep(2000);

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
driver.findElement(By.xpath("//*[@class='x-grid3-cell-inner x-grid3-col-repertorioPrendas']"));
//Para seleccionar nueva inscripción 
var element = driver.findElement(By.xpath("//*[@class='x-grid3-cell-inner x-grid3-col-repertorioPrendas']"));
var builder = new Actions(driver);
builder.doubleClick(element).perform();

//driver.findElement(By.xpath("//*[@class='x-grid3-cell-inner x-grid3-col-repertorioPrendas'].")).getAttribute("26");
//driver.findElement(By.xpath("//*[@class='x-grid3-cell-inner x-grid3-col-repertorioPrendas']"));
//field_value = driver.findElement(By.xpath("//*[@class='x-grid3-cell-inner x-grid3-col-repertorioPrendas']")).getElementsByName('26');
//field_value.click();



//driver.findElement(By.xpath("//*[@class='x-grid3-row-checker']")).click();


