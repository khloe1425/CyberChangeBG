var clickMe = document.querySelector('#clickMe')
var reset = document.querySelector('#resetForm')
var body = document.querySelector('body')
var listColor = ['red', 'blue', 'green', 'yellow', 'pink', 'grey', 'lime']
body.style.backgroundColor = 'black'

reset.classList.add('none')

clickMe.addEventListener('click', function(){
    var changeClor = parseInt(Math.random() * listColor.length)
    body.style.backgroundColor = listColor[changeClor]
    body.style.transition = '1s linear'
    reset.classList.remove('none')
})

reset.addEventListener('click', function(){
    location.reload();
})