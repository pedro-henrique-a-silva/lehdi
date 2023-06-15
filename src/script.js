document.addEventListener('keydown', function(event) {
  // Captura o código da tecla pressionada
  const keyCode = event.keyCode || event.which;

  // Exibe o código da tecla no console
  console.log('Tecla pressionada:', keyCode);
});