let bubbleContainer = document.querySelector('#bubbleContainer')
let timerBox = document.querySelector('#timerBox')
let hitBox = document.querySelector('#hitBox') 
let scoreBox = document.querySelector('#scoreBox') 
let score = 0 ;


function createNewBubbles(){
    let allBubbles = '' ;
    for(let i=1 ; i<127 ; i++){
        let randomNum = Math.round(Math.random() * (9 - 1) + 1)
        allBubbles += `<div id='bubble'>${randomNum}</div>`
    }
    bubbleContainer.innerHTML = allBubbles
}



function runTimer(){
    let timeInSeconds = 10 ;
    let t = setInterval(()=>{
        if(timeInSeconds > 0){
            timeInSeconds -- ;
            timerBox.innerText = timeInSeconds ;
        }
        else{
            clearInterval(t)
            bubbleContainer.style.display = 'none' 
            document.querySelector('#displayScore').innerHTML = `<h1>Your Final Score is: <span>${score}</span></h1>`
        }
    },1000)
}



let hitNum = 0 ;
function generateRandomNumAtHit(){
    hitNum = Math.round(Math.random() * (9 - 1) + 1)
    hitBox.innerText = hitNum
}

// when window loads for the first time / on reloading the page
window.addEventListener('load',()=>{
    createNewBubbles()
    runTimer()
    generateRandomNumAtHit()
})


// when bubble is clicked !
document.querySelector('#bubble'),addEventListener('click',(e)=>{
    if(e.target.innerText == hitNum){
        score += 10 ;
        scoreBox.innerText = score
        generateRandomNumAtHit()
        createNewBubbles()
    }
})



