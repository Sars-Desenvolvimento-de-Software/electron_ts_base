document.addEventListener("DOMContentLoaded", () => {
  console.log(window.api.ping_tela_lista());
  document.body.innerHTML += `<p>Resposta do preload: ${window.api.ping_tela_lista()}</p>`;
});