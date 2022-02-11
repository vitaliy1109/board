const board = document.querySelector('#board')
const colors = ['#00ffff', '#ff00ff','#00ff00', '#0000ff', '#eee8aa', '#bc8f8f', '#4b0082', '#9acd32', '#ff4500', '#000080']
const SQUARES_NUMBER = 1008

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target    
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {    
    return colors[ Math.floor(Math.random() * colors.length)]
}