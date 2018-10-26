//Importar objetos de Selenium:

var helpers = require("./helpers");
var assert = require("assert");
var webdriver = require("selenium-webdriver"),By = webdriver.By,until = webdriver.until;
var driver = new webdriver.Builder().forBrowser("chrome").build();


// Register general error handler
 process.on("uncaughtException", function(err) {
console.log("El test ha encontrado errores: " + err);
   
// Take screenshot
driver.takeScreenshot().then(helpers.saveImage('C:/Test_Selenium/scripts/errores/error', currentDateTime, 'Error al generar screenshot para error encontrado en el test.'));
});


// Inicio del Test
var tiempoEsperaTest = 10000;
var tiempo = 1000;
var currentDateTime = helpers.getCurrentDateTime();
var mail = 'pbarrera@pragma.cl';
var pass = 'pa15431545';


console.log('Iniciando la ejecución el test en fecha: ' + currentDateTime);

// Indicar ruta de aplicación

driver.get("https://accounts.google.com/signin/v2/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=es&flowName=GlifWebSignIn&flowEntry=ServiceLogin#__utma=29003808.1749411734.1519225480.1519225480.1519225480.1&__utmb=29003808.0.10.1519225480&__utmc=29003808&__utmx=-&__utmz=29003808.1519225480.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not provided)&__utmv=-&__utmk=193997166");

 // Esta parte funciona OK
   // driver.wait(until.elementLocated(By.id("identifierId")))
    driver.findElement(By.id("identifierId")).sendKeys(mail);
    driver.findElement(By.id("identifierNext")).click();

    //Como le falta tiempo de refresh, le doy un poco de espera y más tiempo para asegurar que encontrará el elemento password
    driver.sleep(tiempo);
    driver.wait(until.elementLocated(By.xpath('//input[@type="password"]')), tiempoEsperaTest);

    //Luego, me aseguro de estar en la página que introduce el password
driver.findElement(By.id("headingText")).getText().then(function(text) {
     assert.equal(text, 'Te damos la bienvenida');
});

//Ingreso el password
driver.findElement(By.xpath('//input[@type="password"]')).sendKeys(pass);

// Presiono botón

driver.findElement(By.id("passwordNext")).click();