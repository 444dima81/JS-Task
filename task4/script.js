const  promptRedact = document.querySelector('a');
promptRedact.addEventListener('click', function(event) {
        event.preventDefault();
        this.textContent = (prompt('Введите ваш текст'));
        })


//     let textContent.addEventListener('click', (event) => {
//     prompt("Напиши что хочешь")
//     event.preventDefault(textContent);

// });