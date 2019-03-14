// INGRESAR__CONTRATANTE_DEUDOR_SCRIPT_CASO9 //

// Configuración previa para los scripts a ejecutar 
// Importar objetos de selenium
var helpers = require('./helpers');
var log = require("./logger");
var assert = require('assert');
var webdriver = require('selenium-webdriver'), 
	By = webdriver.By,  
	until = webdriver.until, 
	Key = webdriver.Key, 
	select = webdriver.select;
var driver = new webdriver.Builder().forBrowser('firefox').build();
var currentDateTime = helpers.getCurrentDateTime();

//Inicializa Logger de aplicacion
//log.init(driver, "C:/Selenium_test/scripts/logs/log_ingresar_contratante_deudor/Log_Deudor", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_ingresar_contratantes_deudor.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//var currentDateTime = helpers.getCurrentDateTime();
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: script_caso10_constituyente');
	
// Indicar ruta de aplicación
//driver.get('http://192.9.200.197/srpsd/#');
driver.get('http://prendascert.srcei.cl/srpsdcert/#');

// Campo Usuario
helpers.getVisibleElementWaiting(driver, By.id('user'), 10000, 'No apareció el campo user.').sendKeys(datos[0].user);

// Campo Password
helpers.getVisibleElementWaiting(driver, By.id('pass'), 10000, 'No apareció el campo pass.').sendKeys(datos[0].pass, webdriver.Key.TAB);    
driver.sleep(2000);

// Botón entrar 
driver.findElement(By.xpath("//button[contains(.,'Entrar')]")).click();
//driver.findElement(By.id('ext-gen30')).click();

// Para seleccionar nueva inscripción 
driver.sleep(3000);
driver.findElement(By.id('INGRESAR_INSCRIPCION')).click();

// pestaña deudor
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(2000);

// combo deudor
driver.sleep(2000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(3)')).click();

// Combobox tipo identificación
driver.findElement(By.xpath("//*[@id='ext-gen308']")).click();
inputField = driver.findElement(By.xpath('/html/body/div[15]/div/div[1]')).click(); 

// Campo identificador
driver.findElement(By.name('identificador')).sendKeys(datos[9].identificador, webdriver.Key.TAB); 
driver.sleep(2000); 

// Combobox Pais
driver.findElement(By.xpath("//*[@id='ext-gen314']")).click();
inputField = driver.findElement(By.xpath('/html/body/div[16]/div/div[13]')).click();

// Campo nombre
driver.findElement(By.name('nombres')).sendKeys(datos[9].nombres, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón agregar deudor
driver.findElement(By.xpath("//button[contains(.,'Agregar Deudor')]")).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_deudor/ingresar_contratante_deudor_script_caso9/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Validar agregar deudor
helpers.getVisibleElementWaiting(driver, By.className('x-grid3-row x-grid3-row-first x-grid3-row-last'), 5000, 'Fallo al agregar deudor.');

// Fin ejecución
log.info("La prueba finalizó con éxito"); 

// Cerrar navegador
driver.sleep(2000);
driver.quit();