const clima = require('./controlador/clima')
const argv = require("yargs").options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.ciudad);

const getInformacion = async(ciudad) => {
    try {
        //ojisimoooo con este awaaaaaittt
        const temp = await clima.getClima(argv.ciudad)
        return `El clima de ${ciudad} es de ${temp}`
    } catch (e) {
        return `No se pudo obtener el clima de ${ciudad}`
    }
}

getInformacion(argv.ciudad).then(console.log).catch(console.log);


/*
clima.getClima(argv.ciudad).then(console.log).catch(console.log)*/