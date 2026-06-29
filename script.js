const btnAbrir = document.getElementById("btnAbrir");
const amor = document.getElementById("amor");
const galeria = document.getElementById("galeria");
const cartaFinal = document.getElementById("cartaFinal");
const musica = document.getElementById("musica");

// abrir história
btnAbrir.addEventListener("click", () => {
  document.getElementById("telaInicial").style.display = "none";
  amor.style.display = "block";
  galeria.style.display = "flex";
});

// detectar scroll até o final da galeria
window.addEventListener("scroll", () => {
  const rect = galeria.getBoundingClientRect();

  // quando o usuário "passar" da galeria
  if (rect.bottom < window.innerHeight + 100) {
    cartaFinal.style.display = "block";
    musica.style.display = "block";
  }
});