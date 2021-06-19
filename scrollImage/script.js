const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
   const triggerBottom =  window.innerHeight / 5 * 4

   boxes.forEach(b => {
       const boxTop = b.getBoundingClientRect().top
       boxTop < triggerBottom ? b.classList.add('show') : b.classList.remove('show')
   })
}