const countdown = document.querySelector(".countdown");

// Expiry Date
const launchDate = new Date('Nov 25, 2022 19:45:00').getTime();

const intvl = setInterval(() => {
   
  const now = new Date().getTime();
  const distance = launchDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `<div>${days}<span>Days</span></div><div>${hours}<span>Hours</span></div><div>${mins}<span>Minutes</span></div><div>${seconds}<span>Seconds</span></div>`;

  if(distance <= 0){
    clearInterval(intvl);
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Happy Birthday!";
  } 

},1000);

