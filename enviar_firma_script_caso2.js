// ENVIAR_FIRMA_SCRIPT_CASO2 //

// Configuración previa para los scripts a ejecutar 
// Importar objetos de selenium
var helpers = require('./helpers');
var log = require("./logger");
var datosGene = require('./obtieneNRepertorioNotaria');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), 
	By = webdriver.By,  
	until = webdriver.until, 
	Key = webdriver.Key, 
	select = webdriver.select;
var driver = new webdriver.Builder().forBrowser('firefox').build();
var currentDateTime = helpers.getCurrentDateTime();

//Inicializa Logger de aplicacion
//log.init(driver, "C:/Selenium_test/scripts/logs/log_enviar_firma/Log_EnviarFirma", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_enviar_firma.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//var currentDateTime = helpers.getCurrentDateTime();
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: enviar_firma_caso2');
	
// Indicar ruta de aplicación
//driver.get('http://192.9.200.197/srpsd/#');
driver.get('http://prendascert.srcei.cl/srpsdcert/#');

// Asignar variable de ámbito de bloque a la variable numeroRepertorioNotaria
let numeroRepertorioNotaria = datosGene.obtenerIncrementarNRepNot();

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
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1120"]')).sendKeys(datos[1].rut, webdriver.Key.TAB);
driver.sleep(1000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1121"]')).sendKeys(datos[1].razonSocial, webdriver.Key.TAB); 
driver.sleep(1000);

// Ingresar Nombre 
//driver.findElement(By.name('nombres')).sendKeys(datos[1].nombres, webdriver.Key.TAB); 
//driver.sleep(2000);

// Ingresar Apellido paterno
//driver.findElement(By.name('apellidoPaterno')).sendKeys(datos[1].apellidoPaterno, webdriver.Key.TAB);
//driver.sleep(2000);

// Ingresar Apellido materno
//driver.findElement(By.name('apellidoMaterno')).sendKeys(datos[1].apellidoMaterno, webdriver.Key.TAB);
//driver.sleep(3000);

// Verificación de datos persona natural
//helpers.getVisibleElementWaiting(driver, By.className('x-form-element remote-valid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.');

// pestaña constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(2000);

// Combo constituyente
driver.sleep(2000);
driver.findElement(By.css('#constituyenteTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1129"]')).sendKeys(datos[2].rut, webdriver.Key.TAB);
driver.sleep(1000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1130"]')).sendKeys(datos[2].razonSocial, webdriver.Key.TAB); 
driver.sleep(1000);

// Agregar constituyente
driver.findElement(By.xpath("//button[contains(.,'Agregar Constituyente')]")).click();

// Ingresar Nombre
//driver.findElement(By.xpath('//*[@id="ext-comp-1136"]')).sendKeys(datos[2].nombres, webdriver.Key.TAB); 
//driver.sleep(2000);

// Ingresar Apellido paterno
//driver.findElement(By.xpath('//*[@id="ext-comp-1139"]')).sendKeys(datos[2].apellidoPaterno, webdriver.Key.TAB);
//driver.sleep(2000);

// Ingresar Apellido materno
//driver.findElement(By.xpath('//*[@id="ext-comp-1140"]')).sendKeys(datos[2].apellidoMaterno, webdriver.Key.TAB);
//driver.sleep(2000);

// Verificación de datos persona natural
//helpers.getVisibleElementWaiting(driver, By.className('x-form-element remote-valid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.'); 	


// Pestaña deudor
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(2000);

// Combo deudor
driver.sleep(2000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1138"]')).sendKeys(datos[3].rut, webdriver.Key.TAB);
driver.sleep(1000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1139"]')).sendKeys(datos[3].razonSocial, webdriver.Key.TAB); 
driver.sleep(1000);

// Agregar deudor
driver.findElement(By.xpath("//button[contains(.,'Agregar Deudor')]")).click();

// Ingresar Nombre 
//driver.findElement(By.xpath('//*[@id="ext-comp-1150"]')).sendKeys(datos[3].nombres, webdriver.Key.TAB); 
//driver.sleep(2000);

// Ingresar Apellido paterno
//driver.findElement(By.xpath('//*[@id="ext-comp-1153"]')).sendKeys(datos[3].apellidoPaterno, webdriver.Key.TAB);
//driver.sleep(2000);

// Ingresar Apellido materno
//driver.findElement(By.xpath('//*[@id="ext-comp-1154"]')).sendKeys(datos[3].apellidoMaterno, webdriver.Key.TAB);
//driver.sleep(2000);

// Verificación de datos persona natural
//helpers.getVisibleElementWaiting(driver, By.className('x-form-element remote-invalid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.');

// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();

// Ingresar número notaria
driver.findElement(By.name('numeroRepertorioNotaria')).sendKeys(numeroRepertorioNotaria, webdriver.Key.TAB);

// Ingresar año repertorio notaria
driver.findElement(By.name('agnoRepertorioNotaria')).sendKeys(datos[4].agnoRepertorioNotaria, webdriver.Key.TAB);

// Ingresar fecha otorgamiento fechaSuscripcion
driver.findElement(By.name('fechaOtorgamiento')).sendKeys(datos[4].fechaOtorgamiento, webdriver.Key.TAB);

// Ingresar fecha suscripción 
driver.findElement(By.name('fechaSuscripcion')).sendKeys(datos[4].fechaSuscripcion, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();

// Adjuntar y subir archivo pdf //   
driver.sleep(3000);
driver.findElement(By.css('#contrato-file-file')).sendKeys(datos[6].contrato);
driver.findElement(By.xpath("//button[contains(.,'Subir Contrato')]")).click();

// Click en botón enviar a firma
driver.sleep(3000);
driver.findElement(By.xpath("//button[contains(.,'Enviar a Firma')]")).click();
driver.sleep(3000);

// Tomar evidencia 
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_enviar_firma/enviar_firma_script_caso2/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón si mensaje confirmación de envío a firma 
driver.sleep(7000);
helpers.getVisibleElementWaiting(driver, By.xpath("//button[contains(.,'Sí')]"), 5000, 'No es posible realizar la acción.').click();
driver.sleep(3000);

// Tomar evidencia 
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_enviar_firma/enviar_firma_script_caso2/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón no mensaje se encontró el/los RUN del constituyente en el contrato. ¿Desea enviar a firma de todas maneras?
driver.sleep(7000);
helpers.getVisibleElementWaiting(driver, By.xpath("//button[contains(.,'No')]"), 5000, 'No es posible realizar la acción:se encontró el/los RUN del constituyente en el contrato. ¿Desea enviar a firma de todas maneras? .').click();
driver.sleep(5000);

//Ir a listado de tareas 
driver.sleep(3000);
driver.findElement(By.id('VER_TAREAS')).click();

// Click en boton no mensaje de confirmación ir a listado de tareas
helpers.getVisibleElementWaiting(driver, By.css('#ext-gen498'), 5000, 'No es posible ir a listado de tareas.').click();
driver.sleep(3000);

// Ordenar listado de actuaciones  
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();

// Validar existencia de actuación 
driver.findElement(By.xpath("//div[contains(text(),"+numeroRepertorioNotaria+")]"), 5000, 'No se encontró actuación.').click();

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();