const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let mouse = { x: width / 2, y: height / 2 };

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

function drawField() {
  const spacing = 25;
  const len = 10;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 1.5;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const angle = Math.atan2(mouse.y - y, mouse.x - x);
      const dx = Math.cos(angle) * len;
      const dy = Math.sin(angle) * len;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.stroke();
    }
  }
}

function animate() {
  drawField();
  requestAnimationFrame(animate);
}

animate();