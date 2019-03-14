// INGRESO_DE_CONTRATOS_Y_ANEXOS CASO6 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_ingreso_de_contratos_y_anexos/Log_AdjuntarContratoAnexo", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_archivo_contrato.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//var currentDateTime = helpers.getCurrentDateTime();
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: ingreso_de_contratos_y_anexos_script_caso6');
	
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

// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();

// Adjuntar y subir anexo pdf
driver.sleep(3000);
driver.findElement(By.css('#anexo-file-file')).sendKeys(datos[6].contrato);
driver.findElement(By.xpath("//button[contains(.,'Subir Anexo')]")).click();
driver.sleep(5000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingreso_de_contratos_y_anexos/ingreso_de_contratos_y_anexos_script_caso6/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// validar campos fechas obligatorios
//helpers.getVisibleElementWaiting(driver, By.className('x-grid3-row-checker'), 5000, 'Error al cargar archivo de contrato.').click();

// Eliminar anexo 
driver.sleep(2000);
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[1]/div[3]/div[2]/div/fieldset[2]/div/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/table/tbody/tr/td[1]/div/div')).click();
driver.sleep(2000);
driver.findElement(By.xpath("//button[contains(.,'Eliminar Anexo(s)')]")).click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingreso_de_contratos_y_anexos/ingreso_de_contratos_y_anexos_script_caso6/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// validar eliminación archivo
helpers.getVisibleElementWaiting(driver, By.className(' x-btn-text icon-remove'), 5000, 'Error al cargar archivo de contrato.');

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();
