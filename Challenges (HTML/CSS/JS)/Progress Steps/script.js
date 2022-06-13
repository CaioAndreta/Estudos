let width = 0, contador = 1;
const progress = document.getElementById('progress-value');
const progressBar = document.querySelector('.progress')
const steps = document.querySelectorAll('.step');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
    //progress bar
    width += progressBar.clientWidth / (steps.length - 1);
    progress.style.width = width + 'px';

    //numbers
    steps[contador].classList.add('active')
    contador++
})

backButton.addEventListener('click', () => {
    //progress bar
    width -= progressBar.clientWidth / (steps.length - 1);
    progress.style.width = width + 'px';

    //numbers
    contador--
    steps[contador].classList.remove('active')
})

if (contador > 3) {
    nextButton.setAttribute('disabled', 'disabled');
    backButton.removeAttribute('disabled', 'disabled');
    console.log(contador)
}

// if (contador < 3) {
//     backButton.setAttribute('disabled', 'disabled');
//     nextButton.setAttribute('disabled', 'disabled');
// }