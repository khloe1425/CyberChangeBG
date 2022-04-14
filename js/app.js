var clickMe = document.querySelector('#clickMe')
var reset = document.querySelector('#resetForm')
var body = document.querySelector('body')
var content = document.querySelector("#content");
var listColor = ['red', 'blue', 'green', 'yellow', 'pink', 'grey', 'lime']
body.style.backgroundColor = 'black'

reset.classList.add('none')

clickMe.addEventListener('click', function(){
    var changeColor = parseInt(Math.random() * listColor.length)
    body.style.backgroundColor = listColor[changeColor]
    body.style.transition = '1s linear'
    reset.classList.remove('none')
    content.style.justifyContent = "space-between"
})

reset.addEventListener('click', function(){
    body.style.backgroundColor = 'black'
    body.style.transition = '1s'
    reset.classList.add('none')
    content.style.justifyContent = "center"
})