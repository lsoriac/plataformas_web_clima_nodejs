//importación de módulos
const axios = require('axios');
//función
const getClima = async(ciudad) => {
    //codifica a formato de url
    const ciudadURL = encodeURI(ciudad)
        //ojo este await
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}&appid=04c33f8c54c1519a32690b31efacf327&units=metric`)
        //console.log(resp);
    return {
        temperatura: resp.data.main.temp,
        presion: resp.data.main.pressure,
        humedad: resp.data.main.humidity
    }
}
module.exports = {
    getClima
}