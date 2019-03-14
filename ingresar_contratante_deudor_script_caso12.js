// INGRESAR__CONTRATANTE_DEUDOR_SCRIPT_CASO12 //

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
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: script_caso13_constituyente');
	
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
driver.sleep(10000);
driver.findElement(By.id('INGRESAR_INSCRIPCION')).click();

// pestaña deudor
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(2000);

// combo deudor
driver.sleep(2000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.name('identificador')).sendKeys(datos[10].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar razón social
driver.findElement(By.name('razonSocial')).sendKeys(datos[10].razonSocial, webdriver.Key.TAB);
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_deudor/ingresar_contratante_deudor_script_caso12/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón agregar deudor
driver.findElement(By.xpath("//button[contains(.,'Agregar Deudor')]")).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_deudor/ingresar_contratante_deudor_script_caso12/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Guardar 
driver.findElement(By.xpath("//button[contains(.,'Grabar')]")).click();
driver.sleep(3000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_deudor/ingresar_contratante_deudor_script_caso12/evidencia_3',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Ir al listado de tareas
driver.findElement(By.id('VER_TAREAS')).click();

// Click en botón Si mensaje ¿Está seguro que desea dejar la actuación? Se perderán todos los datos no guardados.
driver.findElement(By.xpath("//button[contains(.,'Sí')]")).click();
driver.sleep(3000);

// Ordenar listado de actuaciones  
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();
driver.sleep(3000);

// Validar existencia de actuación 
driver.findElement(By.xpath("//div[contains(text(),'INFORMATICA S.A.')]"), 5000, 'No se encontró registro guardado.').click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_contratantes_deudor/ingresar_contratante_constituyente_script_caso12/evidencia_4',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Fin ejecución
log.info("La prueba finalizó con éxito"); 

// Cerrar navegador
driver.sleep(5000);
driver.quit();