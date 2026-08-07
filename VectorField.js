 document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function drawField() {
  const spacing = 40;
  const len = 100;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      const dxMouse = mouse.x - x;
      const dyMouse = mouse.y - y;
      const dist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      const maxDist = 110;
      const norm = Math.min(dist / maxDist, 1);;

      const hue = norm * 280;
      const alpha = .5 - norm * 0.5;

      ctx.strokeStyle = `hsla(${hue}, 50%, 80%, ${alpha})`;

      const angle = Math.atan2(dyMouse, dxMouse);
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
  });