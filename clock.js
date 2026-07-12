<<<<<<< HEAD
// function runClock() {
//     const now =  new Date();
//     let hours = now.getHours();
//     const meridian = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);

//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0)

//     const timeUpdating = `${hours}:${minutes}:${seconds} ${meridian}`;

//     document.getElementById('clock').innerText = timeUpdating;
// }

// runClock();
// setInterval(runClock, 1000);

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

=======
// function runClock() {
//     const now =  new Date();
//     let hours = now.getHours();
//     const meridian = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);

//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0)

//     const timeUpdating = `${hours}:${minutes}:${seconds} ${meridian}`;

//     document.getElementById('clock').innerText = timeUpdating;
// }

// runClock();
// setInterval(runClock, 1000);

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

>>>>>>> 40aaf787e5c6cbe80a559be13e6c999eeca6a236
setInterval(runClock,1000);