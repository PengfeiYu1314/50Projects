const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')


toggles.forEach(t => t.addEventListener('change', e => doTheTrick(e.target)))


function doTheTrick(x) {
    if (good.checked && cheap.checked && fast.checked) {
        if(good === x){
            fast.checked = false
        }
        if (cheap === x) {
            good.checked = false
        }
        if (fast === x) {
            cheap.checked = false
        }
    }

}