const clickMe = document.querySelector('#clickMe')
const body = document.querySelector('body')
const listColor = ['red', 'blue', 'green', 'yellow', 'pink', 'grey', 'lime']
body.style.backgroundColor = 'black'

clickMe.addEventListener('click', () => {
    const changeClor = parseInt(Math.random() * listColor.length)
    body.style.backgroundColor = listColor[changeClor]
    body.style.transition = '1s linear'
})