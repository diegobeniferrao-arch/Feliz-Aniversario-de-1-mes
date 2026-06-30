document.addEventListener("DOMContentLoaded", () => {

  const btnAbrir = document.getElementById("btnAbrir");
  const telaInicial = document.getElementById("telaInicial");
  const amor = document.getElementById("amor");
  const galeria = document.getElementById("galeria");
  const cartaFinal = document.getElementById("cartaFinal");
  const musica = document.getElementById("musica");
  const polaroids = document.querySelectorAll(".polaroid");
  const btnMusica = document.getElementById("btnMusica");
  const finalSurpresa = document.getElementById("finalSurpresa");
  const textoCarta = document.getElementById("textoCarta");

  /* ❤️ CORAÇÕES */
  function criarCoracao() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = "0.8";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let pos = 0;
    let opacity = 0.8;

    const interval = setInterval(() => {
      pos += 2;
      opacity -= 0.01;

      heart.style.bottom = pos + "px";
      heart.style.opacity = opacity;

      if (pos > window.innerHeight || opacity <= 0) {
        clearInterval(interval);
        heart.remove();
      }
    }, 20);
  }

  /* ❤️ ABRIR HISTÓRIA */
  btnAbrir.addEventListener("click", () => {
    telaInicial.style.display = "none";
    amor.style.display = "block";

    const heartInterval = setInterval(criarCoracao, 200);

    setTimeout(() => clearInterval(heartInterval), 3000);

    setTimeout(() => {
      galeria.style.display = "flex";
      animarFotos();
    }, 1200);
  });

  /* 📸 ANIMAÇÃO DAS FOTOS */
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

  /* 📜 MOSTRA CARTA (corrigido com IntersectionObserver) */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mostrarCarta();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(galeria);

  /* 💌 CARTA TYPEWRITER CORRIGIDO */
  function mostrarCarta() {
    cartaFinal.style.display = "block";
    musica.style.display = "block";

    const conteudo = textoCarta.dataset.text;
    textoCarta.innerHTML = "";

    let i = 0;

    function digitar() {
      if (i < conteudo.length) {
        textoCarta.innerHTML += conteudo.charAt(i)
          .replace("\n", "<br>");
        i++;
        setTimeout(digitar, 12);
      }
    }

    digitar();
  }

  /* 🎵 SURPRESA FINAL */
  btnMusica.addEventListener("click", () => {

    finalSurpresa.style.display = "flex";

    const chuva = setInterval(criarCoracao, 150);

    setTimeout(() => {
      clearInterval(chuva);

      window.open(
        "https://open.spotify.com/track/6owwZC8gUvrBuygvOHaYXb",
        "_blank"
      );

    }, 3000);

  });

});

  }, 3000);

});
```
