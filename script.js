let height
let width
let mosquito
function adjustScreenSize() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(width, height)
}

adjustScreenSize()

function randomPosition() {

    //removing the last mosquito(if it exists)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

    }

    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    // creating HTML element
    mosquito = document.createElement('img')
    mosquito.src = 'images/mosquito.png'
    mosquito.className = `${randomSize()} ${randomSide()}`
    mosquito.id = 'mosquito'
    
    // setting its position deppendind on the random positions
    mosquito.style.position = 'absolute'
    mosquito.style.left = `${positionX}px`
    mosquito.style.top = `${positionY}px`
    document.body.appendChild(mosquito)

    console.log(randomSide())
}

function randomSize() {
    let randomClass = Math.ceil(Math.random() * 3)
    console.log(randomClass)
    switch (randomClass) {
        case 1:
            return 'mosquito1'

        case 2:
            return 'mosquito2'

        case 3:
            return 'mosquito3'
    }

}

function randomSide() {
    let randomClass = Math.ceil(Math.random() * 2)
    console.log(randomClass)
    switch (randomClass) {
        case 1:
            return 'rightSide'

        case 2:
            return 'leftSide'

    }
}