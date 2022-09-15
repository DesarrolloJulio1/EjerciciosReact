const user = {
    name: 'julio',
    lastname: 'morales',
    age: 25,
}


function printInfo(user) {
    return '<h1> hola ' + user.name + ' ' + user.age + '</h1'
}

console.log(printInfo(user))

//document.body.append(button)

document.body.innerHTML = printInfo(user)