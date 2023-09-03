const {registrar, leer} = require('./operaciones.js');

const operaciones = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const tipo = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

//ej: node index.js registrar patitas 16 perro cafe "mañosa y gordita"
switch (operaciones) {
  case 'registrar':
    registrar(nombre, edad, tipo, color, enfermedad);
    break;
  case 'leer':
    let citas = leer();
    citas.forEach(cita => {
      console.log(cita);
    }
    );
    break;
  default:
    console.log('No ingresaste una operación válida, las operaciones válidas son: registrar y leer');
}