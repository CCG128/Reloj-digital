//Creamos una función para mostrar nuestro reloj digital
const mostrarReloj = () =>{
    //Declaramos un objeto de tipo fecha
    let fecha = new Date();
    //Declaramos variables, las cuales contendran los minutos, segundos y horas
    let hr = formatoNum(fecha.getHours());
    let min = formatoNum(fecha.getMinutes());
    let sec = formatoNum(fecha.getSeconds());
    //Obtenemos el div "hora" el cual se encuentra en nuestro documento html
    let hora = document.getElementById("hora");
    //Al objeto hora le añadimos la informacion del reloj
    hora.innerHTML = `${hr}:${min}:${sec}`;
    /* Creamos dos arreglos, uno para los meses y otro para los dias
       Esto lo realizamos debido a que la funcion de obtener los mesas y dias 
       del objeto tipo fecha nos devuelve un numero correspondiente al mes y 
       al dia */
    const meses = ["Ene", "Feb", "Mar", "Abr", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    //Obtenemos el dia y mes por medio del indice de nuestro arreglo
    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    //Obtenemos el objeto de fecha y le añadimos la informacion de la fecha
    let fechaDiv = document.getElementById("fecha");
    fechaDiv.innerHTML = `${diaSemana} - ${fecha.getDate()} - ${mes} - ${fecha.getFullYear()}`;
    //Obtenemos el elemento con el id contenedor y le añadimos la clase "Animar"
    //La funcion toggle nos sirve para colocar y quitar la clase, una si, una no
    document.getElementById("contenedor").classList.toggle("animar");
}
//Creamos una funcion, la cual le añadira el 0 cuando el valor es solo de un digito
const formatoNum = (val) => val < 10 ? val = "0" + val : val = val;
//Llamamos la funcion cada segundo
setInterval(mostrarReloj, 1000);
