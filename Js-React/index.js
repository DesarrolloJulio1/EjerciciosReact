const showText = () => 'Hola mundo'
console.log(showText())

const button = document.createElement('button')
button.innerText = 'Click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)