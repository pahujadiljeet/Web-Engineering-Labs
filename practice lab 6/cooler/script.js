const myplaybtn = document.getElementById("btnplay")

function Play(){
    const ball = document.createElement("div")
    ball.className = "ball"
    ball.style.backgroundColor= generateHex()
    const container = document.getElementsByClassName("container")[0]
    container.appendChild(ball)

}

myplaybtn.onclick = Play

function generateHex() {
    // Define all possible hexadecimal characters
    const characters = '0123456789ABCDEF';
    
    // Initialize an empty string to store the hexadecimal color code
    let hexColor = '#';
    
    // Generate a random hexadecimal color code with six characters
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)]; // Pick a random character from the characters array
    }
    
    return hexColor;
}

function generateRandom() {
    const column = document.getElementsByClassName("ball")
    for (i=0; i<column; i++) {
        item.style.backgroundColor = generateHex()
    }
}

const btngenerate = document.getElementById("gen")
btngenerate.onclick = generateRandom()