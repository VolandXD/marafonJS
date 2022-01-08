const board = document.getElementById('board'),
 SQUARES_NUMBEER = 1000,
    colors = ['#5d15a5', '#1bafc9', '#2a9e08', '#b68b07',
        '#66133e', '#63b187'];

for (let i = 0; i < SQUARES_NUMBEER; i++) {
    const square = document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

function setColor(element) {
    element.style.backgroundColor = getRandomColor()
    element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
    element.style.animation = 'pulse 300ms ease';
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    element.style.animation = 'pulseLeave 300ms ease';
}
function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index]
}