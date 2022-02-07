
const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();

    let hora = document.getElementById("hora");
    hora.innerHTML = `${hr}:${min}:${sec}`
}

setInterval(mostrarReloj, 1000);