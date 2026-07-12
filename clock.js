function runClock(){

    const now = new Date();


    let hours = now.getHours();

    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;


    const time =
    `${String(hours).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")} ${meridian}`;


    const date =
    now.toDateString();


    document.getElementById("clock").textContent = time;

    document.getElementById("date").textContent = date;

}


runClock();

setInterval(runClock,1000);