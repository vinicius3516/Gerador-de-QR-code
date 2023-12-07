const container = document.querySelector(".container");
const qrButton = document.querySelector(".qr-btn");
const qrInput = document.querySelector("#qr-form input");
const qrImg = document.querySelector("#qr-code img");

function gerarQR() {
  const qrInputValor = qrInput.value;

  if (!qrInputValor) return;

  qrButton.innerText = "Gerando codigo...";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x250&data=${qrInputValor}`;

  qrImg.addEventListener("load", () => {
    container.classList.add("ativo");
    qrButton.classList.add("ativo");
    qrButton.innerText = "Codigo criado!";
  });
}
qrButton.addEventListener("click", () => {
  gerarQR();
});

qrInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    gerarQR();
  }
});

// Limpar input

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("ativo");
    qrButton.classList.remove("ativo");
    qrButton.innerText = "Gerar QR code";
  }
});
