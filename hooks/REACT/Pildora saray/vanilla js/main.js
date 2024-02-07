// -----------CUANDO ES SOLO UN BOTON -------------------

// const buttons = document.querySelector('button')

// button.addEventListener('click', function() {
//     const id = button.getAttribute('data-id')

// if (button.classList.contains('liked')) {
//     button.classList.remove('liked')
//     button.innerText = "ME GUSTA"
// }
// else {
//     button.classList.add('liked')
//     button.innerText = "NO ME GUSTA"
// }
// })

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {

    button.addEventListener('click', function() {
        // const id = button.getAttribute('data-id')

    if (button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = "ME GUSTA"
    }
    else {
        button.classList.add('liked')
        button.innerText = "NO ME GUSTA"
    }
    })
})