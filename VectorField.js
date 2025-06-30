 document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // initial

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function drawField() {
      const spacing = 30;
      const len = 10;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 2;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
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
  });