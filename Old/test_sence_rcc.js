//TEST_SENCE_RCC

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), By = webdriver.By,  until = webdriver.until, Key = webdriver.Key;
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
var tiempo = 1000;


// Indicar ruta de aplicación
driver.get('http://192.9.200.125:8082/');

// Para campo Usuario
driver.findElement(By.id('idRut')).sendKeys('17310025-6');

// Para campo Password
driver.findElement(By.id('Password')).sendKeys('12345678');

// Para botón ingresar
driver.findElement(By.id('btnIngresar')).click();

// Para menú buscador hito
driver.findElement(By.id('BuscadorHito')).click();

//Como le falta tiempo de refresh, le doy un poco de espera y más tiempo para asegurar que encontrará el elemento password
driver.sleep(tiempo);
driver.wait(until.elementLocated(By.xpath('//input[@id="Fecha_Desde"]')), tiempoEsperaTest);   

// Para campo fecha desde
inputField = driver.findElement(By.id('Fecha_Desde'));
inputField.clear();
inputField.sendKeys('2018/03/01');

// Para campo fecha hasta
inputField = driver.findElement(By.id('Fecha_Hasta'));
inputField.clear();
inputField.sendKeys('2018/03/30');

// Para campo Proveedor
driver.findElement(By.id('select2-Proveedor_id-container')).click();      
driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys('ADEXUS S.A.');
driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(webdriver.Key.ENTER);


// Para campo O/C
//driver.findElement(By.id('select2-Proveedor_id-container')).click();      
//driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys('9999');
//driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(webdriver.Key.ENTER);


// Para botón ingresar  
//driver.findElement(By.id('BuscadorOc')).click();

