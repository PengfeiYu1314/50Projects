const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStar)
fill.addEventListener('dragend', dragEnd)


empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragOver)

    empty.addEventListener('dragleave', dragOver)
    empty.addEventListener('drop', dragOver)
})

function dragStar() {
    this.className += ' hold'
    setTimeOut ( () =>  this.className = 'invisible', 100)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefualt()
}


function dragEnter(e) {
    e.preventDefualt()
    this.className += ' hovered'
}

function dragLeave(e) {
    e.preventDefualt()
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}