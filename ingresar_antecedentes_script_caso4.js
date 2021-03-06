// INGRESAR__ANTECEDENTES_SCRIPT_CASO4 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_ingresar_antecedentes/Log_IngresarAntecedentes", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_ingresar_antecedentes.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//var currentDateTime = helpers.getCurrentDateTime();
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: ingresar_antecedentes_script_caso4');
	
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

// Para seleccionar nueva inscripción 
driver.sleep(3000);
driver.findElement(By.id('INGRESAR_INSCRIPCION')).click();

// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();
driver.sleep(2000);

// Combo tipo de documento
driver.findElement(By.xpath('//*[@id="ext-gen274"]')).click();
driver.findElement(By.xpath('/html/body/div[11]/div/div[2]')).click();
driver.sleep(2000);

// Ingresar fecha válida
driver.findElement(By.xpath('//*[@id="ext-gen294"]')).click();
driver.findElement(By.xpath('/html/body/div[12]/ul/li/div/table/tbody/tr[2]/td/table/tbody/tr[1]/td[5]/a')).click();

// Ingresar fecha válida
driver.findElement(By.xpath('//*[@id="ext-gen298"]')).click();
driver.findElement(By.xpath('/html/body/div[13]/ul/li/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/a')).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_antecedentes/ingresar_antecedentes_script_caso4/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// validar fechas obligatorias
helpers.getVisibleElementWaiting(driver, By.className('x-form-text x-form-field contrato x-trigger-noedit'), 5000, 'Fallo la validación de campos fechas obligatorios.').click();

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();