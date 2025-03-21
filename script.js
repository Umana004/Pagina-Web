const colores = [
    'linear-gradient(to bottom, #20263b, #4a2c5d, #b66b9e, #ffb3d9)',
    'linear-gradient(to top, #000, #002c40, #005b80, #00d4ff)'
];

let indice = 0;

function cambiarFondo() {
    document.documentElement.style.setProperty('--color-bg', colores[indice]);
    indice = (indice + 1) % colores.length;
}

setInterval(cambiarFondo, 3000); 



document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });