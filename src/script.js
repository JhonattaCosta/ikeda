//function para abrir modal
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
//function para fechar o modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

//Function que faz a galeria aparecer com opacidade
function checkAppearing() {
  var img = document.querySelectorAll(".gallery-img");
  img.forEach(function (img) {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.classList.add("appearing"); // Não precisa do ponto antes do nome da classe
    }
  });
}

window.addEventListener("scroll", checkAppearing);
window.addEventListener("load", checkAppearing);

//function que abre a pagina de contato enviado em uma nova guia
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    var form = event.target;
    var url = form.getAttribute("action");
    var formValues = new FormData(form);
    var formParams = new URLSearchParams(formValues);
    var newWindow = window.open(url, "_blank"); // Abre uma nova aba
    fetch(url, {
      method: "POST",
      body: formParams,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Se o envio for bem-sucedido, exiba uma mensagem na nova aba
          newWindow.document.write("<h1>Formulário enviado com sucesso!</h1>");
        } else {
          // Se houver algum problema no envio, exiba uma mensagem de erro
          newWindow.document.write(
            "<h1>Ocorreu um erro ao enviar o formulário.</h1>"
          );
        }
      })
      .catch((error) => {
        // Se houver um erro ao enviar a requisição, exiba uma mensagem de erro
        newWindow.document.write(
          "<h1>Ocorreu um erro ao enviar o formulário.</h1>"
        );
        console.error("Erro ao enviar o formulário:", error);
      });
  });
