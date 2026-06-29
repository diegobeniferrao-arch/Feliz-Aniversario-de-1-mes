const btnAbrir = document.getElementById("btnAbrir");
const telaInicial = document.getElementById("telaInicial");
const amor = document.getElementById("amor");
const galeria = document.getElementById("galeria");
const cartaFinal = document.getElementById("cartaFinal");
const musica = document.getElementById("musica");
const polaroids = document.querySelectorAll(".polaroid");

/* 💓 CORAÇÕES FLUTUANDO */
function criarCoracao() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.opacity = 0.8;
  heart.style.zIndex = 9999;
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);

  let pos = 0;

  const interval = setInterval(() => {
    pos += 2;
    heart.style.bottom = pos + "px";
    heart.style.opacity -= 0.01;

    if (pos > window.innerHeight) {
      clearInterval(interval);
      heart.remove();
    }
  }, 20);
}

/* 💘 ABRIR HISTÓRIA */
btnAbrir.addEventListener("click", () => {
  telaInicial.style.display = "none";
  amor.style.display = "block";

  // corações por alguns segundos
  const heartInterval = setInterval(criarCoracao, 200);

  setTimeout(() => {
    clearInterval(heartInterval);
  }, 3000);

  // mostra galeria com delay
  setTimeout(() => {
    galeria.style.display = "flex";
    animarFotos();
  }, 1200);
});


/* 📸 FOTOS APARECENDO UMA A UMA */
function animarFotos() {
  polaroids.forEach((foto, index) => {
    foto.style.opacity = 0;
    foto.style.transform = "translateY(20px)";

    setTimeout(() => {
      foto.style.transition = "all 1s ease";
      foto.style.opacity = 1;
      foto.style.transform = "translateY(0)";
    }, index * 600);
  });
}


/* 📜 DETECTA FIM DA GALERIA */
window.addEventListener("scroll", () => {
  const rect = galeria.getBoundingClientRect();

  if (rect.bottom < window.innerHeight + 100) {
    if (cartaFinal.style.display !== "block") {
      mostrarCarta();
    }
  }
});


/* 💌 MOSTRAR CARTA + DIGITAÇÃO */
function mostrarCarta() {
  cartaFinal.style.display = "block";
  musica.style.display = "block";

  const texto = cartaFinal.querySelector(".typewriter");
  const conteudo = texto.innerHTML;
  texto.innerHTML = "";

  let i = 0;

  function digitar() {
    if (i < conteudo.length) {
      texto.innerHTML += conteudo.charAt(i);
      i++;
      setTimeout(digitar, 15);
    }
  }

  digitar();
}

  const timer = setInterval(() => {
    if (op >= 1) clearInterval(timer);
    el.style.opacity = op;
    op += 0.05;
  }, 30);
}
