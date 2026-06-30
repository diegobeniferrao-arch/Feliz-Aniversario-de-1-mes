const btnAbrir = document.getElementById("btnAbrir");

console.log("Botão encontrado:", btnAbrir); // 👈 DEBUG IMPORTANTE

if (btnAbrir) {
  btnAbrir.addEventListener("click", () => {

    const telaInicial = document.getElementById("telaInicial");
    const amor = document.getElementById("amor");
    const galeria = document.getElementById("galeria");

    telaInicial.style.display = "none";
    amor.style.display = "block";

    /* ❤️ corações */
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

    const heartInterval = setInterval(criarCoracao, 200);
    setTimeout(() => clearInterval(heartInterval), 3000);

    setTimeout(() => {
      galeria.style.display = "flex";
    }, 1200);

  });

} else {
  console.error("❌ Botão btnAbrir NÃO foi encontrado no HTML");
}
