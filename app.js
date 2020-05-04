const argv = require('./config/yargs').argv;
const colors = require('colors');

const mult = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch(comando) {
    case 'listar':
        console.log('Listar');
        mult.listarTabla(base,limite);
        break;
    case 'crear':
        console.log('Crear');
        mult.crearArchivo(base,limite)
            .then(archivo => console.log(archivo.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//parametro = argv[2]
//let base = parametro.split('=')[1];
//console.log(base);