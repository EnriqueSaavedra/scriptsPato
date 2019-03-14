// SCRIPT FLUJO INCRIPCION ACTUACION RVM_CASO3 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_flujo_inscripcion_actuacion_rvm/Log_FlujoInscripcionRVM", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_inscripcion_actuacion_rvm.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});
	
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

// combo acreedor
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
driver.sleep(2000);

// Verificación de datos persona natural
helpers.checkNotExistsElement(driver, By.className('x-form-element remote-invalid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.');


// pestaña constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(2000);

// combo constituyente
driver.sleep(2000);
driver.findElement(By.css('#constituyenteTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1135"]')).sendKeys(datos[9].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1136"]')).sendKeys(datos[9].nombres, webdriver.Key.TAB); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.xpath('//*[@id="ext-comp-1139"]')).sendKeys(datos[9].apellidoPaterno, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.xpath('//*[@id="ext-comp-1140"]')).sendKeys(datos[9].apellidoMaterno, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón agregar constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//button[contains(.,'Agregar Constituyente')]")).click();

// Verificación de datos persona natural
helpers.checkNotExistsElement(driver, By.className('x-form-element remote-invalid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.'); 	


// Pestaña deudor
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(2000);

// Combo deudor
driver.sleep(2000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();

// Ingresar Rut
driver.findElement(By.xpath('//*[@id="ext-comp-1149"]')).sendKeys(datos[9].rut, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Nombre 
driver.findElement(By.xpath('//*[@id="ext-comp-1150"]')).sendKeys(datos[9].nombres, webdriver.Key.TAB); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.xpath('//*[@id="ext-comp-1153"]')).sendKeys(datos[9].apellidoPaterno, webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.xpath('//*[@id="ext-comp-1154"]')).sendKeys(datos[9].apellidoMaterno, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón agregar deudor
driver.sleep(2000);
driver.findElement(By.xpath("//button[contains(.,'Agregar Deudor')]")).click();

// Verificación de datos persona natural
helpers.checkNotExistsElement(driver, By.className('x-form-element remote-invalid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.'); 	

// Tomar evidencia
//driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_flujos_inscripcion_rvm/flujo_inscripcion_actuacion_rvm_caso1/evidencia_1',  currentDateTime, 
//'Error en screenshot para página de Login.'));

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


// Pestaña anotaciones al RVM 
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/ul/li[2]/a[2]/em/span/span')).click();

// Ingresar PPU
driver.findElement(By.name('new_ppu')).sendKeys(datos[10].ppu, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón agreagr ppu
driver.findElement(By.xpath("//button[contains(.,'Agregar PPU')]")).click();
driver.sleep(2000);

// Validar ingreso de ppu en tabla de ppu //
driver.findElement(By.xpath("//div[contains(text(),'CCWT18')]"), 5000, 'No se encontró ppu en la tabla.');

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_flujos_inscripcion_rvm/flujo_inscripcion_actuacion_rvm_caso3/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));


// Click en botón Siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();


// Adjuntar y subir archivo pdf //   
driver.sleep(3000);
driver.findElement(By.css('#contrato-file-file')).sendKeys(datos[8].contrato);
driver.findElement(By.xpath("//button[contains(.,'Subir Contrato')]")).click();


// Click en botón enviar a firma
driver.sleep(3000);
driver.findElement(By.xpath("//button[contains(.,'Enviar a Firma')]")).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_flujos_inscripcion_rvm/flujo_inscripcion_actuacion_rvm_caso3/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Verificación de datos persona natural
helpers.getVisibleElementWaiting(driver, By.xpath('//*[@id="ext-gen579"]'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.');

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();
