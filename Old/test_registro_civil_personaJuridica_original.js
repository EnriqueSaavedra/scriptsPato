//TEST_registro_civil_juridico_test_sincombo

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

// Inicio del Test
var currentDateTime = helpers.getCurrentDateTime();
console.log('Iniciando la ejecución del test en fecha: ' + currentDateTime);

// Primer Ingreso - Primer Ingreso - Primer Ingreso - Primer Ingreso - Primer Ingreso - Primer Ingreso - Primer Ingreso - Primer Ingreso //

// Indicar ruta de aplicación
driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('capafunc1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123');     

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(5000);
driver.findElement(By.id('OAI_INGRESAR_INSCRIPCION')).click();

// Combobox acreedor
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1037'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1037')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1121']")).sendKeys('96838800-2');
driver.findElement(By.xpath("//*[@id='ext-comp-1122']")).sendKeys('PHARMA BENEFITS CHILE');		     
//driver.findElement(By.id('ext-gen223')).click();											   

// Combobox constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__constituyenteTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1053'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1053')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1130']")).sendKeys('99581960-0');
driver.findElement(By.xpath("//*[@id='ext-comp-1131']")).sendKeys('ADMINISTRADORA PLAZA S.A.');
driver.findElement(By.id('ext-gen251')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();											  

// Combobox deudor  
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__deudorTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1065'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1065')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1139']")).sendKeys('81675600-6');
driver.findElement(By.xpath("//*[@id='ext-comp-1140']")).sendKeys('COMERCIALIZADORA S.A.');
driver.findElement(By.id('ext-gen308')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();

// Presionar botón siguiente
driver.findElement(By.id('ext-gen235')).click();

// Combobox tipo documento
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1071'));
inputField.clear();
inputField.sendKeys('Escritura Pública');
inputField = driver.findElement(By.id('ext-comp-1071')).sendKeys(webdriver.Key.ENTER);

// Para marcar checkbox
// FALTA ESTE PUNTO

//Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1073')).sendKeys('128');

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
driver.sleep(5000);

// Presionar botón Siguiente 
driver.findElement(By.id('ext-gen235')).click();

// Registrar Pago
driver.sleep(3000);
driver.findElement(By.id('ext-gen217')).click();
driver.sleep(3000);
driver.findElement(By.id('ext-comp-1184')).click(); 
driver.sleep(13000);

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(2000);
driver.findElement(By.id('ext-gen610')).click(); 

// Segundo Ingreso - Segundo Ingreso - Segundo Ingreso - Segundo Ingreso - Segundo Ingreso - Segundo Ingreso - Segundo Ingreso - Segundo Ingreso //

// Indicar ruta de aplicación
driver.sleep(3000);
driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('capafunc1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123');     

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(5000);
driver.findElement(By.id('OAI_INGRESAR_INSCRIPCION')).click();

// Combobox acreedor
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1037'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1037')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1121']")).sendKeys('96838800-2');
driver.findElement(By.xpath("//*[@id='ext-comp-1122']")).sendKeys('PHARMA BENEFITS CHILE');		     
//driver.findElement(By.id('ext-gen223')).click();											   

// Combobox constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__constituyenteTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1053'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1053')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1130']")).sendKeys('99581960-0');
driver.findElement(By.xpath("//*[@id='ext-comp-1131']")).sendKeys('ADMINISTRADORA PLAZA S.A.');
driver.findElement(By.id('ext-gen251')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();											  

// Combobox deudor  
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__deudorTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1065'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1065')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1139']")).sendKeys('81675600-6');
driver.findElement(By.xpath("//*[@id='ext-comp-1140']")).sendKeys('COMERCIALIZADORA S.A.');
driver.findElement(By.id('ext-gen308')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();

// Presionar botón siguiente
driver.findElement(By.id('ext-gen235')).click();

// Combobox tipo documento
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1071'));
inputField.clear();
inputField.sendKeys('Escritura Pública');
inputField = driver.findElement(By.id('ext-comp-1071')).sendKeys(webdriver.Key.ENTER);

// Para marcar checkbox
// FALTA ESTE PUNTO

//Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1073')).sendKeys('129');

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
driver.sleep(5000);

// Presionar botón Siguiente 
driver.findElement(By.id('ext-gen235')).click();

// Registrar Pago
driver.sleep(3000);
driver.findElement(By.id('ext-gen217')).click();
driver.sleep(3000);
driver.findElement(By.id('ext-comp-1184')).click(); 
driver.sleep(13000);

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(2000);
driver.findElement(By.id('ext-gen610')).click(); 

// Tercer Ingreso - Tercer Ingreso - Tercer Ingreso - Tercer Ingreso - Tercer Ingreso - Tercer Ingreso - Tercer Ingreso - Tercer Ingreso //

// Indicar ruta de aplicación
driver.sleep(3000);
driver.get('http://192.9.200.219/srpsd/#');

// Campo Usuario
driver.findElement(By.id('user')).sendKeys('capafunc1');

// Campo Password
driver.findElement(By.id('pass')).sendKeys('123123');     

// Botón entrar 
driver.findElement(By.id('ext-gen30')).click();
  
// Para seleccionar nueva inscripción 
driver.sleep(5000);
driver.findElement(By.id('OAI_INGRESAR_INSCRIPCION')).click();

// Combobox acreedor
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1037'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1037')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1121']")).sendKeys('96838800-2');
driver.findElement(By.xpath("//*[@id='ext-comp-1122']")).sendKeys('PHARMA BENEFITS CHILE');		     
//driver.findElement(By.id('ext-gen223')).click();											   

// Combobox constituyente
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__constituyenteTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1053'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1053')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1130']")).sendKeys('2639471-6');
driver.findElement(By.xpath("//*[@id='ext-comp-1131']")).sendKeys('NORMA PIEDAD QUEZADA SAN MARTÍN');
driver.findElement(By.id('ext-gen251')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();											  

// Combobox deudor  
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1067__deudorTab']")).click();
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1065'));
inputField.sendKeys('Persona Jurídica');
inputField = driver.findElement(By.id('ext-comp-1065')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1139']")).sendKeys('2639471-6');
driver.findElement(By.xpath("//*[@id='ext-comp-1140']")).sendKeys('NORMA PIEDAD QUEZADA SAN MARTÍN');
driver.findElement(By.id('ext-gen308')).click();
driver.sleep(2000);  
//driver.findElement(By.id('ext-gen224')).click();

// Presionar botón siguiente
driver.findElement(By.id('ext-gen235')).click();

// Combobox tipo documento
driver.sleep(2000);
inputField = driver.findElement(By.id('ext-comp-1071'));
inputField.clear();
inputField.sendKeys('Escritura Pública');
inputField = driver.findElement(By.id('ext-comp-1071')).sendKeys(webdriver.Key.ENTER);

// Para marcar checkbox
// FALTA ESTE PUNTO

//Campo Numero Repertorio Notaria
driver.findElement(By.id('ext-comp-1073')).sendKeys('130');

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

// Anotaciones al RVM
driver.sleep(2000);
driver.findElement(By.xpath("//*[@id='ext-comp-1092__anotacionesRVMPanel']")).click();
driver.sleep(2000);
driver.findElement(By.id('new_ppu')).sendKeys('CJGV24');
driver.findElement(By.id('ext-gen456')).click();
driver.sleep(6000);

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
driver.sleep(5000);

// Presionar botón Siguiente 
driver.findElement(By.id('ext-gen235')).click();

// Registrar Pago
driver.sleep(3000);
driver.findElement(By.id('ext-gen217')).click();
driver.sleep(3000);
driver.findElement(By.id('ext-gen667')).click(); 
driver.sleep(13000);

// LogOut
driver.findElement(By.id('logout')).click();
driver.sleep(2000);
driver.findElement(By.id('ext-gen667')).click(); 