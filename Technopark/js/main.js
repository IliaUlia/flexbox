

document.querySelector(".burger-bottom").addEventListener("click", function() { 
  document.querySelector(".burger-bottom").classList.toggle("active");
  document.querySelector(".nav__hamburger-menu").classList.toggle("active");
});

function outputUpdate(vol) {
  let output = document.querySelector('#volume');
  output.value = vol;
  output.computedStyleMap.left = vol - 0 + 'items left';
}

/*--------- Countdown -------------*/
const countdown = document.querySelector('.countdown');
const targetDate = new Date('2025-02-15T24:00:00');
 

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

/*-------------- Dropdown ----------*/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.buy__botton')) {

  let dropdowns = document.getElementsByClassName("dropdown-content");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

/*-------------- svg-Dropdown ----------------*/

