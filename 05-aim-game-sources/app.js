const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
timeList = document.querySelector('.time-list'),
timeEl = document.getElementById('time'),
colors = ['#5d15a2', '#2bafc9', '#2a7e08', '#b68b09',
    '#66135e', '#63b167'];
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
});
let time = 0,
    score = 0;
timeList.addEventListener('click', (event) => {
    event.target.classList.contains('time-btn') ? time = parseInt(event.target.getAttribute('data-time')) : '';
    screens[1].classList.add('up')
    startGame();
});
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')){
      score++;
      event.target.remove();
      createRandomCircle()
  }
});

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle();
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        timeEl.innerHTML = `00:${current}`
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div'),
        size = getRandomNumber(10, 60),
        {width, height} = board.getBoundingClientRect(),
    x  = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = getRandomColor();
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}