// FIRMA DE SOLICITUDES CASO 3 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_firma_solicitudes/Log_FirmaSolicitudes", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_firma_solicitudes.json');

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
driver.sleep(2000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1121"]')).sendKeys(datos[1].razonSocial, webdriver.Key.TAB); 
driver.sleep(2000);


// Pestaña constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(2000);

// Combo constituyente
driver.sleep(2000);
driver.findElement(By.css('#constituyenteTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1129"]')).sendKeys(datos[2].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1130"]')).sendKeys(datos[2].razonSocial, webdriver.Key.TAB); 
driver.sleep(2000);

// Agregar constituyente
driver.findElement(By.xpath("//button[contains(.,'Agregar Constituyente')]")).click();


// Pestaña deudor
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(2000);

// combo deudor
driver.sleep(2000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(2)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1138"]')).sendKeys(datos[3].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1139"]')).sendKeys(datos[3].razonSocial, webdriver.Key.TAB); 
driver.sleep(2000);

// Agregar deudor
driver.findElement(By.xpath("//button[contains(.,'Agregar Deudor')]")).click();


// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();

// Ingresar número notaria
driver.findElement(By.name('numeroRepertorioNotaria')).sendKeys(numeroRepertorioNotaria, webdriver.Key.TAB);

// Ingresar año repertorio notaria
driver.findElement(By.name('agnoRepertorioNotaria')).sendKeys(datos[5].agnoRepertorioNotaria, webdriver.Key.TAB);

// Ingresar fecha otorgamiento fechaSuscripcion
driver.findElement(By.name('fechaOtorgamiento')).sendKeys(datos[5].fechaOtorgamiento, webdriver.Key.TAB);

// Ingresar fecha suscripción 
driver.findElement(By.name('fechaSuscripcion')).sendKeys(datos[5].fechaSuscripcion, webdriver.Key.TAB);
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

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_firma_solicitudes/firma_solicitudes_script_caso3/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón Si
driver.sleep(3000);
helpers.getVisibleElementWaiting(driver, By.xpath("//button[contains(.,'Sí')]"), 5000, 'No apareció el botón SI.').click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_firma_solicitudes/firma_solicitudes_script_caso3/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón si mensaje se encontró el/los RUN del constituyente en el contrato. ¿Desea enviar a firma de todas maneras?
driver.sleep(4000);
helpers.getVisibleElementWaiting(driver, By.xpath('//*[@id="ext-gen498"]'), 5000, 'No es posible realizar la acción.').click();
driver.sleep(4000);

// Ordenar listado de actuaciones  
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[2]/div/div[1]/div[1]/div[1]/div/table/thead/tr/td[8] ')).click();

// Validar existencia de actuación 
driver.findElement(By.xpath("//div[contains(text(),"+numeroRepertorioNotaria+")]"), 5000, 'No se encontró actuación.').click();

// Click en actuación (chrome)
//driver.findElement(By.xpath("//div[contains(text(),'Revisar Actuacion')]")).then(function(elem){
//driver.actions().doubleClick(elem).perform();
//});
//driver.sleep(3000);

// Click en actuación (mozilla)
helpers.doubleClick(driver, 'xpath', '//div[contains(text(),"'+numeroRepertorioNotaria+'")]');
driver.sleep(3000);

// Click en botón firmar sin token
driver.findElement(By.xpath("//button[contains(.,'Firmar Sin Token')]")).click();

// Click en botón si mensaje Se ha firmado la actuación sin usar token. 
helpers.getVisibleElementWaiting(driver, By.xpath("//button[contains(.,'Aceptar')]"), 5000, 'No aparece boton aceptar.').click();
driver.sleep(3000);

// Validar la actualización de estado pagar actuación
driver.findElement(By.xpath("//div[contains(text(),"+numeroRepertorioNotaria+")]"), 5000, 'No se actualizó al estado pagar actuación').click();

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();
