const button = document.querySelector("button");
button.addEventListener("click", updateName);
function updateName(){
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
}
const replace = document.querySelector("p");
replace.addEventListener("click", text);
function text(){
    const text = prompt("Enter some text");
    replace.textContent= `${text}`;
}