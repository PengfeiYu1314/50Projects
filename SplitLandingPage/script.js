const left = document.querySelector('.left');
const right =document.querySelector('.right');
const contianer = document.querySelector('.container')

left.addEventListener('mouseenter', ()=> contianer.classList.add('hover-left'))
left.addEventListener('mouseLeave', () => contianer.classList.remove('hover-lfet'))
right.addEventListener('mouseLeave', () => contianer.classList.remove('hover-right'))
right.addEventListener('mouseenter', ()=> contianer.classList.add('hover-right'))