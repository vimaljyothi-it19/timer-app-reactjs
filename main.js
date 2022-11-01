const currentTime = () => {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const title = document.querySelector('title');
/*
    // Français
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const days = ["Diamnche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
*/
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date();
    let hh = date.getHours(); // Get the hour (0-23)
    let mm = date.getMinutes(); // Get the minute (0-59)
    let ss = date.getSeconds(); // Get the second (0-59)

    let month = months[date.getMonth()];
    let dd = date.getDate(); // Get the day as a number (1-31)
    let weekday = days[date.getDay()];
    let yyyy = date.getFullYear(); // Get the year as a four digit number (yyyy)

    var ampm = hh >= 12 ? 'PM' : 'AM';
    hours = hh % 12;
    

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hours}:${mm}:${ss} ${ampm}`;
    // let dateShow = `${weekday}, ${dd} ${month} ${yyyy}`;
    let dateShow = `${weekday}, ${month} ${dd}, ${yyyy}`;

    h2.innerText = dateShow;
    title.innerText = time;
    h1.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);