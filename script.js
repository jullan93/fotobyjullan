/* Menyikon som knapp för öppning av overlay meny */

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const track = documentSelector('.track');
let initialPosition = null;
let moving = false;
let transform = 0;

window.addEventListener('mousedown', (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  console.log(transformMatrix);
  if (transformMatrix === 'none') {
    transform = 0;
  } else {

  }
})

window.addEventListener('mousemove', (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition . initialPosition;
    track.style.transform = 'translateX(${diff}px)';
  }
})

window.addEventListener('mouseup', (e) => {
  moving = false;
})