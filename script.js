const btnAbrir = document.getElementById("btnAbrir");
const telaInicial = document.getElementById("telaInicial");
const amor = document.getElementById("amor");
const galeria = document.getElementById("galeria");
const cartaFinal = document.getElementById("cartaFinal");
const musica = document.getElementById("musica");

/* 💘 Clique para abrir a história */
btnAbrir.addEventListener("click", () => {
  telaInicial.style.display = "none";

  amor.style.display = "block";

  setTimeout(() => {
    galeria.style.display = "flex";
  }, 1200);
});


/* 📜 Detecta quando usuário chega no final da galeria */
window.addEventListener("scroll", () => {
  const galeriaRect = galeria.getBoundingClientRect();

  // quando a galeria já foi "vista" quase inteira
  if (galeriaRect.bottom < window.innerHeight + 100) {

    if (cartaFinal.style.display !== "block") {
      cartaFinal.style.display = "block";

      setTimeout(() => {
        musica.style.display = "block";
      }, 1000);
    }

  }
});


/* ✨ Pequeno efeito extra: fade suave ao aparecer */
function fadeIn(el) {
  el.style.opacity = 0;
  el.style.display = "block";

  let op = 0;

  const timer = setInterval(() => {
    if (op >= 1) clearInterval(timer);
    el.style.opacity = op;
    op += 0.05;
  }, 30);
}