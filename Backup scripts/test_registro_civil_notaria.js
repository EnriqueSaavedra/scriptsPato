//TEST_registro_civil_natural

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
var desde=62;
var cantidad=1;
var valores=["15431545-4","2-7"];
var contador=0;

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso -  Ingreso //

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

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(5000);
driver.findElement(By.id('INGRESAR_INSCRIPCION')).click();

// Combobox acreedor
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1041'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1041')).sendKeys(webdriver.Key.ENTER);
//driver.sleep(3000);
driver.findElement(By.id('ext-comp-1121')).sendKeys(valores[contador++], webdriver.Key.TAB);
//driver.sleep(6000);
driver.findElement(By.id('ext-comp-1122')).sendKeys('PATRICIO ESTEBAN'); 
driver.findElement(By.id('ext-comp-1125')).sendKeys('BARRERA'); 
driver.findElement(By.id('ext-comp-1126')).sendKeys('VALENZUELA', webdriver.Key.TAB);
driver.sleep(3000); 

// Combobox constituyente
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__constituyenteTab']")).click();
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1057'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1057')).sendKeys(webdriver.Key.ENTER); 
//driver.sleep(3000);
driver.findElement(By.id('ext-comp-1135')).sendKeys('18062432-5', webdriver.Key.TAB);
driver.sleep(3000);
driver.findElement(By.id('ext-comp-1136')).sendKeys('MARIO ANTONIO'); 
driver.findElement(By.id('ext-comp-1139')).sendKeys('DÍAZ'); 
driver.findElement(By.id('ext-comp-1140')).sendKeys('GUTIÉRREZ', webdriver.Key.TAB); 
driver.sleep(6000);
driver.findElement(By.id('ext-gen271')).click();
driver.sleep(6000);  

// Combobox deudor  
driver.sleep(3000);
driver.findElement(By.xpath("//*[@id='ext-comp-1071__deudorTab']")).click();
driver.sleep(3000);
inputField = driver.findElement(By.id('ext-comp-1069'));
inputField.sendKeys('Persona Natural');
inputField = driver.findElement(By.id('ext-comp-1069')).sendKeys(webdriver.Key.ENTER);
//driver.sleep(3000);
driver.findElement(By.id('ext-comp-1149')).sendKeys('18062432-5', webdriver.Key.TAB);  
driver.sleep(3000);
driver.findElement(By.id('ext-comp-1150')).sendKeys('MARIO ANTONIO'); 
driver.findElement(By.id('ext-comp-1153')).sendKeys('DÍAZ'); 
driver.findElement(By.id('ext-comp-1154')).sendKeys('GUTIÉRREZ', webdriver.Key.TAB); 
driver.sleep(6000);
driver.findElement(By.id('ext-gen341')).click();
driver.sleep(6000); 

// Presionar botón siguiente
driver.findElement(By.id('ext-gen243')).click();

// Combobox tipo documento
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1074'));
inputField.clear();
inputField.sendKeys('Escritura Pública');
inputField = driver.findElement(By.id('ext-comp-1074')).sendKeys(webdriver.Key.ENTER);

//Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1077')).sendKeys(x);

//Campo Año Repertorio Notaria
driver.findElement(By.id('ext-comp-1078')).sendKeys('2018');

// Campo fecha otorgamiento
inputField = driver.findElement(By.id('fechaOtorgamiento'));
inputField.sendKeys('25/04/2018');

// Campo fecha suscripción
inputField = driver.findElement(By.id('fechaSuscripcion'));
inputField.sendKeys('25/04/2018');

// Presionar botón Siguiente 
driver.findElement(By.id('ext-gen243')).click();

// Adjuntar y subir archivo pdf
driver.sleep(3000);
driver.findElement(By.id('contrato-file')).clear();
driver.findElement(By.id('contrato-file')).sendKeys('C:\\fakepath\\RegistroRechazoDteWeb.pdf', webdriver.Key.TAB);
driver.findElement(By.id('contrato-file-file')).click();
driver.sleep(3000);
//driver.execScript("C:\\Users\\PRG19HP\\Desktop\\autoItScript1.exe");

//driver.executeScript("C:\\Users\\PRG19HP\\Desktop\\autoItScript1.exe").then(function(adjuntar) {
//console.log('returned ', return_value)
//});

//driver.findElement(By.id("contrato-file")).sendKeys('C:\\Users\\PRG19HP\\Desktop\\RegistroRechazoDteWeb.pdf', webdriver.Key.TAB);
driver.sleep(3000);
driver.findElement(By.id('ext-gen475')).click(); 
driver.sleep(5000);

// Presionar botón siguiente
driver.findElement(By.id('ext-gen243')).click();

// Enviar a firma
driver.findElement(By.id('ext-gen223')).click();
driver.sleep(2000);
driver.findElement(By.id('ext-gen538')).click(); 
driver.sleep(5000);
}
