const fs = require('fs');

exports.obtenerIncrementarNRepNot = () => {
    let content = fs.readFileSync(__dirname+'/datosGenerales.json', 'utf8');
    let json = JSON.parse(content);
    json.nRepertorioNotaria++;
    fs.writeFileSync(__dirname+'/datosGenerales.json',JSON.stringify(json),'utf8');
    return json.nRepertorioNotaria;
}
exports.obtenerNRepNot = () => JSON.parse(fs.readFileSync(__dirname+'/datosGenerales.json', 'utf8')).nRepertorioNotaria;
