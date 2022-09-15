const user = {
    name: 'julio',
    lastname: 'morales',
    age: 25,
}


function printInfo(user) {
    const {name, age} = user;
    return '<h1> hola ' + name + ' ' + age + '</h1'
}

console.log(printInfo(user))

//document.body.append(button)

document.body.innerHTML = printInfo(user)