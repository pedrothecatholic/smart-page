function toggleMode() {
  const body = document.body;
  body.classList.toggle('light');

  // pegar a tag img
  const img = document.querySelector('#profile img');

  // substituir a imagem
  if (body.classList.contains('light')) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
  }
}