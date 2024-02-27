const myp1 = document.getElementById("h1id")
// alert(myp1.innerText);
myp1.style.color = "red"
myp1.innerText = "I am over the Moon"
const mybtn = document.getElementById("btn")
mybtn.innerText = "Changed"

function SayHi(){
    alert("Hello i'm here!")
}

mybtn.onclick = SayHi