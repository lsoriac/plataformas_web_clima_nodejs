//importación de módulos
const clima = require('./controlador/clima')
const colors = require('colors/safe')
    //configuración comandos yargs
const argv = require("yargs").options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    },
    //Creación nuevo comando 
    opcion: {
        alias: 'o',
        desc: 'p--> Presión atmosférica \nh--> Humedad',
        demand: false
    }
}).argv;
//comprobación lectura de parámetro ingresado por consola
//console.log(argv.ciudad);
const getInformacion = async(ciudad) => {
        try {
            //await importante
            const ob = await clima.getClima(argv.ciudad)
            if (argv.opcion == "p") {
                let pa = (ob.presion * 100) / 101325
                pa = pa.toFixed(2)
                return `El clima de ${ciudad} es de ${ob.temperatura} °C y la presión atmosférica es de ${ob.presion} hPa(hectopascal ) o ${pa} atm (atmósferas) `
            } else if (argv.opcion == "h") {
                return `El clima de ${ciudad} es de ${ob.temperatura} °C y la humedad es de ${ob.humedad} %`
            } else {
                //en caso de q no se ingrese la opción -o
                return `El clima de ${ciudad} es de ${ob.temperatura} °C`
            }
        } catch (e) {
            //Se captan los errores
            throw new Error(`No se pudo obtener el clima de ${ciudad}, verifique que esté bien escrita la ciudad`)
        }
    }
    //getInformacion(argv.ciudad).then(console.log()).catch(console.log);
    //Se llama y se implementan colores a los mensajes
getInformacion(argv.ciudad).then(mensaje => {
    console.log(colors.green(mensaje))
}).catch(err => { console.log(colors.red(err.message)); });
/*
clima.getClima(argv.ciudad).then(console.log).catch(console.log)*/