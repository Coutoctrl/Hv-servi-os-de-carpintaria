// --- Lógica do Menu Fixo (Sticky) ---
window.onscroll = function() {myFunction()};

// Pega o header
var header = document.getElementById("header");

// Pega a posição inicial do header
var sticky = header.offsetTop;

// Adiciona a classe "sticky" ao header quando você rola a página
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// --- Lógica do Carrossel ---
// (Só executa se existir um carrossel na página)
if (document.querySelector(".carrossel-container")) {
    
    let slideIndex = 1;
    showSlides(slideIndex);

    // Controles de Próximo/Anterior
    document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
    document.querySelector(".next").addEventListener("click", () => plusSlides(1));

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        
        if (n > slides.length) {
            slideIndex = 1; // Volta ao primeiro slide
        }
        if (n < 1) {
            slideIndex = slides.length; // Vai para o último slide
        }

        // Esconde todos os slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Mostra o slide atual
        slides[slideIndex - 1].style.display = "block";
    }
}