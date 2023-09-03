const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    let mascota = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

  if (fs.existsSync('citas.json')) {
    let datos = fs.readFileSync('citas.json', 'utf-8');
    let citas = JSON.parse(datos);
    citas.push(mascota);
    let json = JSON.stringify(citas);
    fs.writeFileSync('citas.json', json, 'utf-8');
  } else {
    let citas = [];
    citas.push(mascota);
    let json = JSON.stringify(citas);
    fs.writeFileSync('citas.json', json, 'utf-8');
  }
}

const leer = () => {
  if (fs.existsSync('citas.json')) {
    let datos = fs.readFileSync('citas.json', 'utf-8');
    let citas = JSON.parse(datos);
    return citas;
  } else {
    console.log('Todavía no hay citas registradas');
    return [];
  }
}

module.exports = {
  registrar,
  leer
}