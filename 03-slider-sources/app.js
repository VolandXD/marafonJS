const upBtn = document.querySelector('.up-button'),
    downButton = document.querySelector('.down-button'),
    sidebar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    container = document.querySelector('.container'),
    slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
upBtn.addEventListener('click', () => {
    changeSlide('up');
})
downButton.addEventListener('click', () => {
    changeSlide('down');

})
function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex === (slidesCount - 1) ? activeSlideIndex = 0 : activeSlideIndex++
    } else if (direction === 'down') {
        activeSlideIndex <= 0 ? activeSlideIndex = (slidesCount - 1) : activeSlideIndex--
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}