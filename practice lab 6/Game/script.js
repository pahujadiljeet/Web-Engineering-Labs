const myplaybtn = document.getElementById("btnplay")

function Play(){
    const ball = document.createElement("div")
    ball.className = "ball"
    const container = document.getElementsByClassName("container")[0]
    container.appendChild(ball)

}

myplaybtn.onclick = Play