const inputEl = document.querySelector("#myInput");
const buttonEl = document.querySelector("#myButton");
buttonEl.textContent = inputEl.value;

const imageLink1El = document.querySelector("[src='./img/photo1.jpg']");
imageLink1El.src = "./img/img3.avif";

const Link2El = document.querySelector("#link");
Link2El.href = "https://uk.minecraft.wiki/w/Bedrock_Edition";
const imageLink2El = document.querySelector("[src='./img/img3.avif']");
imageLink2El.alt = "Minecraft";

const listEl = document.querySelector("#newList");
listEl.firstElementChild.textContent = "Fallout";
