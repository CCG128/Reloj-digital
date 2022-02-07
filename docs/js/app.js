
const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoNum(fecha.getHours());
    let min = formatoNum(fecha.getMinutes());
    let sec = formatoNum(fecha.getSeconds());

    let hora = document.getElementById("hora");
    hora.innerHTML = `${hr}:${min}:${sec}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];

    let fechaDiv = document.getElementById("fecha");
    fechaDiv.innerHTML = `${diaSemana} - ${fecha.getDate()} - ${mes} - ${fecha.getFullYear()}`;

    document.getElementById("contenedor").classList.toggle("animar");

}

const formatoNum = (val) => val < 10 ? val = "0" + val : val = val;

setInterval(mostrarReloj, 1000);