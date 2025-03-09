const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
class Circle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 0;
    this.maxRadius = Math.random() * 150 + 100;
    this.speed = Math.random() * 2 + 1;
    this.color =
      Math.random() > 0.5 ? `rgba(0,255,0,0.7)` : `rgba(128,128,128,0.5)`;
    this.opacity = 1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.color.replace(/[\d.]+\)$/g, `${this.opacity})`);
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.closePath();
  }
  update() {
    if (this.radius < this.maxRadius) {
      this.radius += this.speed;
      this.opacity = 1 - this.radius / this.maxRadius;
      return true;
    }
    return false;
  }
}
let circles = [];
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.03) {
    circles.push(new Circle());
  }
  circles = circles.filter((circle) => {
    circle.draw();
    return circle.update();
  });
  requestAnimationFrame(animate);
}
animate();
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
  });
});

/* Teste */
// Pour la gestion du menu en fonction de la taille de l'écran
function toggleMenu() {
  const navUl = document.querySelector("header nav ul");
  const burger = document.querySelector(".hamburger");
  navUl.classList.toggle("menu-open");
  burger.classList.toggle("open");
}
