//consola npm init
//npm i yargs
const opciones = {
    matematicas: {
        demand: true,
        alias: 'm'
    },
    ingles: {
        demand: true,
        alias: 'i'
    },
    programacion: {
        demand: true, //Obligatorio
        alias: 'p'
    }
}

let obtenerPromedio = (nota_uno + nota_dos + nota_tres) / 3;

const argv = require('yargs')
    .command('promedio', 'Calcular promedio', opciones)
    .argv

module.exports = {
    obtenerPromedio,
    argv
};