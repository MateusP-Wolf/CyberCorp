// Quando a página é carregada, verifique o estado salvo no localStorage
if (localStorage.getItem('menuAberto') === 'true') {
    abrir = 1;
    document.getElementById("overlay").style.display = 'block';
  } else {
    abrir = 0;
    document.getElementById("overlay").style.display = 'none';
  }
  
  function abrirMenu() {
      var fundoOpaco = document.getElementById("overlay");
      if (abrir === 0) {
          abrir = 1;
          fundoOpaco.style.display = 'block';
          // Salve o estado no localStorage
          localStorage.setItem('menuAberto', 'true');
      } else {
          abrir = 0;
          fundoOpaco.style.display = 'none';
          // Salve o estado no localStorage
          localStorage.setItem('menuAberto', 'false');
      }
  }