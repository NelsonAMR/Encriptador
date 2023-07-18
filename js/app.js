import { encrypt, decrypt } from "./encryptation.js";
import validation from "./validation.js";

const input = document.getElementById("msg-input");
const output = document.getElementById("msg-output");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-desencrypt");
const btnCopy = document.querySelector(".btn-copy");
const outputImg = document.querySelector(".output > img");
const outputH2 = document.querySelector(".output > h2");
const info = document.querySelector(".input-info");

let message = "";

input.addEventListener("change", inputChange);
btnEncrypt.addEventListener("click", btnEncryptClick);
btnDecrypt.addEventListener("click", btnDecryptClick);
btnCopy.addEventListener("click", copy);

function inputChange(event) {
  message = event.target.value;
}

function btnEncryptClick() {
  if (validation(message)) {
    info.classList.remove("error");
    outputH2.classList.add("hidden");
    outputImg.classList.add("hidden");
    output.value = encrypt(message);
    btnCopy.classList.add("show");
  } else {
    info.classList.add("error");
  }
}

function btnDecryptClick() {
  if (validation(message)) {
    info.classList.remove("error");
    outputH2.classList.add("hidden");
    outputImg.classList.add("hidden");
    output.value = decrypt(message);
    btnCopy.classList.add("show");
  } else {
    info.classList.add("error");
  }
}

function copy() {
  output.select();
  output.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(output.value);

  alert("Texto copiado");
}
