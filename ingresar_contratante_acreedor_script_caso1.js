// INGRESAR__CONTRATANTE_ACREEDOR_SCRIPT_CASO1 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_ingresar_contratante_acreedor/Log_Acreedor", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_ingresar_contratantes_acreedor.json');

// Register general error handler
var errorCounter = 0;
process.on('uncaughtException', function(err){
	if (errorCounter++ !== 0){
		return;
		}
log.error("El test ha encontrado errores: " , err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//log.info('Iniciando la ejecución del test script_caso1_acreedor');
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);
	
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

// Combo acreedor
driver.sleep(2000);
inputField = driver.findElement(By.xpath("//img[@class='x-form-trigger x-form-arrow-trigger']")).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();

// Ingresar Rut
driver.findElement(By.name('identificador')).sendKeys(datos[1].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Nombre
driver.findElement(By.name('nombres')).sendKeys(datos[1].nombres, webdriver.Key.TAB); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.name('apellidoPaterno')).sendKeys(datos[1].apellidoPaterno, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.name('apellidoMaterno')).sendKeys(datos[1].apellidoMaterno, webdriver.Key.TAB);
driver.sleep(3000);

// Verificación de datos persona natural
helpers.checkNotExistsElement(driver, By.className('x-form-element remote-valid-textfield'), 5000, 'Fallo la validación de persona natural.');	

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_acreedor/ingresar_contratante_acreedor_script_caso1/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();