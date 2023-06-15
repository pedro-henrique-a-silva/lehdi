document.addEventListener('keydown', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key;
  const tecla = document.querySelector(`#${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active')
  }
  // Exibe o código da tecla no console
  console.log('Tecla pressionada:', keyCode);
});

document.addEventListener('keyup', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key;
  const tecla = document.querySelector(`#${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active')
  }
  // Exibe o código da tecla no console
  console.log('Tecla Solta:', keyCode);
});