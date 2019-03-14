// INGRESAR ANOTACIONES AL RVM CASO 2 //

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
//log.init(driver, "C:/Selenium_test/scripts/logs/log_ingresar_antecedentes_anotaciones_rvm/Log_Anotacionesrvm", null);
log.init(driver, "C:/Selenium_test/scripts/logs/LogAll", null);
log.info("------------------------------------------------------------------------------------");
log.info('Iniciando ejecución script ' + helpers.getFilename(__filename));

// Leer datos de prueba
var datos = require('./datos_ingresar_anotaciones_rvm.json');

// Register general error handler
process.on('uncaughtException', function(err) {
log.error("El test ha encontrado errores: " + err);
driver.quit();
helpers.exit();
});

// Inicio del Test
//var currentDateTime = helpers.getCurrentDateTime();
//console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime + ' Ejecución: script_caso1_constituyente');
	
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

// pestaña constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(2000);

// combo constituyente
driver.sleep(2000);
driver.findElement(By.css('#constituyenteTab img.x-form-trigger.x-form-arrow-trigger')).click();
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
//helpers.checkNotExistsElement(driver, By.className('x-form-element remote-invalid-textfield'), 5000, 'Pestaña acreedor: Fallo la validación de persona natural.'); 	

// Click en botón agregar constituyente
driver.findElement(By.xpath("//button[contains(.,'Agregar Constituyente')]")).click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_antecedentes_anotaciones_rvm/ingresar_antecedentes_anotaciones_RVM_script_caso2/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Click en botón siguiente
driver.findElement(By.xpath("//button[contains(.,'Siguiente')]")).click();

// Pestaña anotaciones al RVM 
driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/ul/li[2]/a[2]/em/span/span')).click();

// Ingresar PPU
driver.findElement(By.name('new_ppu')).sendKeys(datos[3].ppu, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón agregar ppu
driver.findElement(By.xpath("//button[contains(.,'Agregar PPU')]")).click();

// Validar ingreso de ppu en tabla de ppu //
driver.findElement(By.xpath("//div[contains(text(),'XT0230')]"), 5000, 'No se encontró ppu.').click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_antecedentes_anotaciones_rvm/ingresar_antecedentes_anotaciones_RVM_script_caso2/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Actualizar PPU
driver.findElement(By.name('new_ppu')).clear();
driver.findElement(By.name('new_ppu')).sendKeys(datos[2].ppu, webdriver.Key.TAB);
driver.sleep(2000);

// Click en botón actualizar ppu
driver.findElement(By.xpath("//button[contains(.,'Actualizar PPU')]")).click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/scripts_ingresar_antecedentes_anotaciones_rvm/ingresar_antecedentes_anotaciones_RVM_script_caso2/evidencia_3',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Fin ejecución
log.info("La prueba finalizó con éxito");

// Cerrar navegador
driver.sleep(2000);
driver.quit();