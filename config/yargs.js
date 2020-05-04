const opts = {
    base: {
        demand:true,
        alias:'b'
    },
    limite: {
        alias:'l',
        default:10
    }
}
const argv = require('yargs')
    .command('listar','Imprime por pantalla la tabla de multiplicar',opts)
    .command('crear','Genera un archivo nuevo en funcion de la base y limite',opts)
    .help()
    .argv;

module.exports = {
    argv
}