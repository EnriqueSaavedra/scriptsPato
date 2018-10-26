// reproducir el registro de una actuación para prendas por oficina de atención integral como persona natural. 

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), 
	By = webdriver.By,  
	until = webdriver.until, 
	Key = webdriver.Key, 
	select = webdriver.select;

var driver = new webdriver.Builder().forBrowser('chrome').build();

// Registro general error handler
process.on('uncaughtException', function(err) {
console.log("El test ha encontrado errores: " + err);
	
// Tomar screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});

// Variables para número de repertorio y run
var desde=154;
var cantidad=2;
var valores=["15431545-4","15800098-9"];
var valores2=["PATRICIO ESTEBAN","KARLA BEATRIZ"];
var valores3=["BARRERA","VALDIVIA"];
var valores4=["VALENZUELA","CASTRO"];
var contador=0;

// COMIENZO DEL SCRIPT 

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Ciclo que permite repertir la ejecución del ingreso, incrementando el número de repertorio e ingresando un run en sección acreedor
for(var x=desde; x<desde+cantidad;x++){
    if(contador===2){
    contador=0;
    }else{
	var contador2=contador++;
	}
    
// Indicar ruta de aplicación
driver.sleep(2000);
driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('capa1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123',webdriver.Key.TAB);     
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(3000);
driver.findElement(By.id('INGRESAR_INSCRIPCION')).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox acreedor 
driver.sleep(2000);
inputField = driver.findElement(By.xpath("//img[@class='x-form-trigger x-form-arrow-trigger']")).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();
inputField = driver.findElement(By.id('ext-comp-1041')).sendKeys(webdriver.Key.ENTER);
//inputField = driver.findElement(By.xpath("//div[@class='x-combo-list-inner']/child::div[1]")).click();

// Otra forma de seleccionar una opcion para el Combobox acreedor
//inputField = driver.findElement(By.id('ext-comp-1041'));
//inputField.sendKeys('Persona Natural');
//inputField = driver.findElement(By.id('ext-comp-1041')).sendKeys(webdriver.Key.ENTER);

// Ingresar Rut
driver.findElement(By.xpath("//*[@id='ext-comp-1121']")).sendKeys(valores[contador2], webdriver.Key.TAB);
driver.sleep(3000);

// Ingresar Nombre
driver.findElement(By.id('ext-comp-1122')).sendKeys(valores2[contador2], webdriver.Key.TAB); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.id('ext-comp-1125')).sendKeys(valores3[contador2], webdriver.Key.TAB);
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.id('ext-comp-1126')).sendKeys(valores4[contador2], webdriver.Key.TAB);
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_3',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(2000);
driver.findElement(By.css('#constituyenteTab img.x-form-trigger.x-form-arrow-trigger')).click()
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();
inputField = driver.findElement(By.id('ext-comp-1057')).sendKeys(webdriver.Key.ENTER);

// Otra forma de seleccionar una opcion para el Combobox constituyente
//inputField = driver.findElement(By.id('ext-comp-1057'));
//inputField.sendKeys('Persona Natural');
//inputField = driver.findElement(By.id('ext-comp-1057')).sendKeys(webdriver.Key.ENTER);

// Ingresar Rut
driver.findElement(By.xpath("//*[@id='ext-comp-1135']")).sendKeys('18062432-5', webdriver.Key.TAB);
driver.sleep(3000);

// Ingresar Nombre
driver.findElement(By.id('ext-comp-1136')).sendKeys('MARIO ANTONIO'); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.id('ext-comp-1139')).sendKeys('DÍAZ');
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.id('ext-comp-1140')).sendKeys('GUTÍERREZ');
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_4',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Agregar constituyente
driver.findElement(By.id('ext-gen271')).click();
driver.sleep(2000);
  
// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_5',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox deudor  
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(3000);
driver.findElement(By.css('#deudorTab img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();
inputField = driver.findElement(By.id('ext-comp-1069')).sendKeys(webdriver.Key.ENTER);

// Otra forma de seleccionar una opcion para el Combobox deudor
//inputField = driver.findElement(By.id('ext-comp-1069'));
//inputField.sendKeys('Persona Natural');
//inputField = driver.findElement(By.id('ext-comp-1069')).sendKeys(webdriver.Key.ENTER);

// Ingresar Rut
driver.findElement(By.xpath("//*[@id='ext-comp-1149']")).sendKeys('18062432-5', webdriver.Key.TAB);
driver.sleep(3000);

// Ingresar Nombre
driver.findElement(By.id('ext-comp-1150')).sendKeys('MARIO ANTONIO'); 
driver.sleep(2000);

// Ingresar Apellido paterno
driver.findElement(By.id('ext-comp-1153')).sendKeys('DÍAZ');
driver.sleep(2000);

// Ingresar Apellido materno
driver.findElement(By.id('ext-comp-1154')).sendKeys('GUTÍERREZ');
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_6',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Agregar Deudor
driver.findElement(By.id('ext-gen341')).click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_7',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Presionar botón siguiente
driver.findElement(By.id('ext-gen243')).click();

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_8',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox tipo documento
driver.sleep(2000);
driver.findElement(By.css('#contratoDocumentoFieldSet img.x-form-trigger.x-form-arrow-trigger')).click();
inputField = driver.findElement(By.css('div.x-layer.x-combo-list[style*="visibility: visible"] div.x-combo-list-inner div:nth-child(1)')).click();
inputField = driver.findElement(By.id('ext-comp-1074')).sendKeys(webdriver.Key.ENTER);

// Otra forma de seleccionar una opcion para el Combobox tipo documento
//inputField = driver.findElement(By.id('ext-comp-1074'));
//inputField.clear();
//inputField.sendKeys('Escritura Pública');
//inputField = driver.findElement(By.id('ext-comp-1074')).sendKeys(webdriver.Key.ENTER);

// Ingresar Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1077')).sendKeys(x);

// Ingresar Campo Año Repertorio Notaria
driver.findElement(By.id('ext-comp-1078')).sendKeys('2018');

// Ingresar Campo fecha otorgamiento
driver.findElement(By.css('#x-form-el-fechaOtorgamiento img.x-form-trigger.x-form-date-trigger')).click();
inputField = driver.findElement(By.css('div.x-menu[style*="visibility: visible"] table.x-date-inner tbody tr:nth-child(4) td:nth-child(4) a.x-date-date')).click();
driver.sleep(1000);

//Otra forma de seleccionar una fecha del calendario
//inputField = driver.findElement(By.id('fechaOtorgamiento'));
//inputField.sendKeys('10/06/2018');
//driver.sleep(2000);

// Ingresar Campo fecha suscripción
driver.findElement(By.css('#x-form-el-fechaSuscripcion img.x-form-trigger.x-form-date-trigger')).click();
inputField = driver.findElement(By.css('div.x-menu[style*="visibility: visible"] table.x-date-inner tbody tr:nth-child(4) td:nth-child(5) a.x-date-date')).click();
driver.sleep(1000);

//Otra forma de seleccionar una fecha del calendario
//inputField = driver.findElement(By.id('fechaSuscripcion'));  
//inputField.sendKeys('10/06/2018');
//driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_9',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Guardar y salir
driver.findElement(By.id('ext-gen235')).click();
driver.sleep(6000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_10',  currentDateTime, 
'Error en screenshot para página de Login.'));

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(2000);

// Tomar evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_11',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Confirmar LogOut
driver.findElement(By.id('ext-gen560')).click(); 
driver.sleep(3000);

}



















