const input = document.querySelector("#password") as HTMLInputElement;
const eyecon = document.querySelector("#eyecon") as HTMLImageElement;

eyecon.onclick = function () {
  if (input.type === "password") {
    input.type = "text";
    eyecon.src = 'eye-icons/eye-open.png'
  } else {
    input.type = "password";
    eyecon.src = 'eye-icons/eye-close.png'
  }
};
