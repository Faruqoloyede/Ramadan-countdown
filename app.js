const countTimer = document.querySelector(".countdown");

const launchDate = new Date('march 23, 2023 12:00:00' ).getTime();

const int = setInterval(() => {
    //get todays date
    const now = new Date().getTime();

    //distance from now to the launch date
    const distance = launchDate - now;

    const days = Math.floor(distance /(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    countTimer.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    if(distance < 0) {
        //stop counter
        clearInterval(int);
        //style and output text
        countTimer.style.color = "#17a2b8";
        countTimer.innerHTML = "Ramadan mubaraq"
    }
}, 1000);