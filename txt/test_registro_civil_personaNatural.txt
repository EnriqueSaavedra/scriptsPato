// reproducir el registro de una actuación para prendas por oficina de atención integral como persona natural. 

// Importar objetos de selenium
var helpers = require('./helpers');
var assert = require('assert');
var webdriver = require('selenium-webdriver'), By = webdriver.By,  until = webdriver.until, Key = webdriver.Key, select = webdriver.select;
var driver = new webdriver.Builder().forBrowser('chrome').build();

// Register general error handler
process.on('uncaughtException', function(err) {
console.log("El test ha encontrado errores: " + err);
	
// Take screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});

// Variables para número de repertorio y run
var desde=2698;
var cantidad=2;
var valores=["1-9","2-7"];
var contador=0;

// COMIENZO DEL SCRIPT 

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

//ciclo que permite repertir la ejecución del ingreso incrementando el número de repertorio y ingresando un run en sección acreedor
for(var x=desde; x<desde+cantidad;x++){
    if(contador===2){
    contador=0;
    }
    
// Indicar ruta de aplicación
driver.sleep(3000);
driver.get('http://prendascert.srcei.cl/srpsdcert/#');
//driver.sleep(3000);
//driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('capa1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123',webdriver.Key.TAB);     
driver.sleep(2000);

// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_1',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(5000);
driver.findElement(By.id('OAI_INGRESAR_INSCRIPCION')).click();

// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_2',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox acreedor
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1037'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1037')).sendKeys(webdriver.Key.ENTER);
//driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1122']")).sendKeys(valores[contador++], webdriver.Key.TAB);
driver.sleep(3000);
// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_3',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox constituyente
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__constituyenteTab']")).click();
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1053'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1053')).sendKeys(webdriver.Key.ENTER);
//driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1136']")).sendKeys('18062432-5', webdriver.Key.TAB);
driver.sleep(6000);
driver.findElement(By.id('ext-gen263')).click();
driver.sleep(6000);  
// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_4',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox deudor  
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__deudorTab']")).click();
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1065'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1065')).sendKeys(webdriver.Key.ENTER);
//driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1150']")).sendKeys('18062432-5', webdriver.Key.TAB);
driver.sleep(6000);
driver.findElement(By.id('ext-gen333')).click();
driver.sleep(6000);
// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_5',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Presionar botón siguiente
driver.findElement(By.id('ext-gen235')).click();
// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_6',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Combobox tipo documento
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1071'));
inputField.clear();
inputField.sendKeys('Escritura Pública');
inputField = driver.findElement(By.id('ext-comp-1071')).sendKeys(webdriver.Key.ENTER);

//Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1073')).sendKeys(x);

//Campo Año Repertorio Notaria
driver.findElement(By.id('ext-comp-1074')).sendKeys('2018');

// Campo fecha otorgamiento
inputField = driver.findElement(By.id('fechaOtorgamiento'));
inputField.sendKeys('25/04/2018');

// Campo fecha suscripción
inputField = driver.findElement(By.id('fechaSuscripcion'));
inputField.sendKeys('25/04/2018');

// Seleccionar notaria
inputField = driver.findElement(By.id('ext-comp-1077'));
inputField.clear();
inputField.sendKeys('JMETER');
inputField = driver.findElement(By.id('ext-comp-1077')).sendKeys(webdriver.Key.ENTER);
driver.sleep(3000);

// Toma evidencia
driver.takeScreenshot().then(helpers.saveImage('C:/Selenium_test/scripts/evidencias_pruebas/evidencia_7',  currentDateTime, 
'Error en screenshot para página de Login.'));

// Presionar botón siguiente
driver.findElement(By.id('ext-gen235')).click();

// Campo rut 
driver.sleep(2000);
driver.findElement(By.id('ext-comp-1106')).sendKeys('18062432-5');

// Campo telefono 
driver.findElement(By.id('ext-comp-1110')).sendKeys('982193244');

// Campo calle 
driver.findElement(By.id('ext-comp-1111')).sendKeys('avenida uno');

// Campo nro calle 
driver.findElement(By.id('ext-comp-1112')).sendKeys('101');

// Campo letra calle 
driver.findElement(By.id('ext-comp-1113')).sendKeys('A');

// Campo resto calle 
driver.findElement(By.id('ext-comp-1114')).sendKeys('maipu');

// Campo comuna
inputField = driver.findElement(By.id('ext-comp-1115'));
inputField.clear();
inputField.sendKeys('LAS CONDES');
inputField = driver.findElement(By.id('ext-comp-1115')).sendKeys(webdriver.Key.ENTER);

// Campo codigo postal
driver.findElement(By.id('ext-comp-1116')).sendKeys('123456');
driver.sleep(3000);

// Presionar botón Siguiente 
driver.findElement(By.id('ext-gen235')).click();

// Registrar Pago
driver.sleep(3000);
driver.findElement(By.id('ext-gen217')).click();
driver.sleep(3000);
driver.findElement(By.id('ext-gen652')).click(); 
driver.sleep(16000);

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(2000);
driver.findElement(By.id('ext-gen652')).click(); 
driver.sleep(5000);
}
