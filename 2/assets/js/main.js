const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const  text = document.getElementsByClassName("text")

let x=0;

btn1.onclick = e => {
    for (let i = 0; i < text.length; i++) {
        x = text[i]
    }
}