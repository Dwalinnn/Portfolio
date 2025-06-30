const cursor = document.getElementById('custom-cursor');
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('mouseover', e => {
  // Si la cible est un élément "sélectionnable" (par ex. <a>)
  if (e.target.closest('a, button, .selectable')) {
    cursor.classList.add('hover');
  }
});

window.addEventListener('mouseout', e => {
  if (e.target.closest('a, button, .selectable')) {
    cursor.classList.remove('hover');
  }
});

function animate() {
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}

animate();