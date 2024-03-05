function openModal(elemento) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imagemModal");
    modal.style.display = "block";
    modal.style.opacity = "0"; // Começa com opacidade 0
    modalImg.src = elemento.src;
    setTimeout(function () {
        modal.style.opacity = "1"; // Aumenta a opacidade para 1 após um pequeno atraso
    }, 50);
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function checkAppearing() {
    var img = document.querySelectorAll('.gallery-img');
    img.forEach(function(img) {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.classList.add('appearing'); // Não precisa do ponto antes do nome da classe
        }
    });
}

window.addEventListener('scroll', checkAppearing);
window.addEventListener('load', checkAppearing);
