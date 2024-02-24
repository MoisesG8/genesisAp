var getFechaActual = function () {
    var date = new Date();
    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return day + "/" + month + "/" + year
}

var getHoraActual = function () {

    var hoy = new Date();
    var Horas = hoy.getHours();
    var Minutos = hoy.getMinutes();
    var Segundos = hoy.getSeconds();
    var H = (Horas < 10 ? '0' + Horas : Horas)
    var M = (Minutos < 10 ? '0' + Minutos : Minutos)
    var S = (Segundos < 10 ? '0' + Segundos : Segundos)
    var hora = H + ':' + M + ':' + S;
    return hora
}

const getDia = function () {
    var date = new Date();
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;


    return day;
}


const getMesCorto = function () {
    const NombresMeses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    var date = new Date();
    var month = date.getMonth()
    return NombresMeses[month];
}
const getMesLargo = function () {
    const NombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    var date = new Date();
    var month = date.getMonth()
    return NombresMeses[month];
}

const getAnio = function () {
    var date = new Date();
    var year = date.getFullYear();
    return year;
}


function customFetch(ruta, method, data, token = "") {
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            }
        }
        await fetch(ruta, Config)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => resolve(respuestaJson))
            .catch((error) => reject(error))

    })
}

function customFetchAll(ruta, method, data) {
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }
        await fetch(ruta, Config)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => resolve(respuestaJson))
            .catch((error) => reject(error))

    })
}

function customFetchAllV2(ruta, method, data) {
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
               // Accept: "application/json",
                "Content-Type": "application/json",
            }
        }
        await fetch(ruta, Config)
            .then((respuesta) =>  resolve(respuesta))
            .catch((error) => reject(error))

    })
}
function customFetchGET(ruta, token) {
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            }
        }
        await fetch(ruta, Config)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => resolve(respuestaJson))
            .catch((error) => reject(error))

    })
}



export { getFechaActual, getDia, getMesCorto, getAnio, getMesLargo, customFetch, getHoraActual, customFetchGET, customFetchAll,customFetchAllV2 }