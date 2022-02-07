
const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoNum(fecha.getHours());
    let min = formatoNum(fecha.getMinutes());
    let sec = formatoNum(fecha.getSeconds());

    let hora = document.getElementById("hora");
    hora.innerHTML = `${hr}:${min}:${sec}`
}

const formatoNum = (val) => val < 10 ? val = "0" + val : val = val;

setInterval(mostrarReloj, 1000);