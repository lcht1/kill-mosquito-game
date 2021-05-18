let height
let width
let mosquito
let points = 1
let time = 5
let createMosquitoTime = 1500
let level = window.location.search
level = level.replace('?', '')

if(level === 'normal') {
    createMosquitoTime = 1500
} else if( level === 'hard'){
    createMosquitoTime = 1000
} else if(level === 'superHard'){
    createMosquitoTime = 750
}
function adjustScreenSize() {
    height = window.innerHeight
    width = window.innerWidth
    // console.log(width, height)
}

adjustScreenSize()
let chronometer = setInterval(() => {
    time--
    if(time < 0){
        clearInterval(chronometer)
        clearInterval(createMosquito)
        window.location.href = "./win.html"
    } else{
    document.getElementById('chronometer').innerHTML = time 
    }
}, 1000)

function randomPosition() {

    //removing the last mosquito(if it exists)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()



        if (points > 3) {
            window.location.href = "./game_over.html"
        } else {
            document.getElementById('h' + points).src = "../images/empty_heart.png"
            points++
        }

    }

    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    // console.log(positionX, positionY)

    // creating HTML element
    mosquito = document.createElement('img')
    mosquito.src = '../images/mosquito.png'
    mosquito.className = `${randomSize()} ${randomSide()}`
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    // setting its position deppendind on the random positions
    mosquito.style.position = 'absolute'
    mosquito.style.left = `${positionX}px`
    mosquito.style.top = `${positionY}px`
    document.body.appendChild(mosquito)

    // console.log(randomSide())
}

// Appears different sizes of mosquitos, deppending on the random class
function randomSize() {
    let randomClass = Math.ceil(Math.random() * 3)
    // console.log(randomClass)
    switch (randomClass) {
        case 1:
            return 'mosquito1'

        case 2:
            return 'mosquito2'

        case 3:
            return 'mosquito3'
    }

}

// Random side of the mosquito
function randomSide() {
    let randomClass = Math.ceil(Math.random() * 2)
    // console.log(randomClass)
    switch (randomClass) {
        case 1:
            return 'rightSide'

        case 2:
            return 'leftSide'

    }
}

//Controlling points
