let width = 0, contador = 1;
const progress = document.getElementById('progress-value');
const progressBar = document.querySelector('.progress')
const steps = document.querySelectorAll('.step');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

checkButtons(contador)

nextButton.addEventListener('click', () => {
    //progress bar
    width += progressBar.clientWidth / (steps.length - 1);
    progress.style.width = width + 'px';

    //numbers
    steps[contador].classList.add('active')
    contador++

    checkButtons(contador)
})

backButton.addEventListener('click', () => {
    //progress bar
    width -= progressBar.clientWidth / (steps.length - 1);
    progress.style.width = width + 'px';

    //numbers
    contador--
    steps[contador].classList.remove('active')

    checkButtons(contador)
})

function checkButtons(i) {
    if (i === 1) {
        backButton.setAttribute('disabled', 'disabled');
        nextButton.removeAttribute('disabled', 'disabled');
    }
    
    else if (i > 1 && i < 4) {
        backButton.removeAttribute('disabled', 'disabled');
        nextButton.removeAttribute('disabled', 'disabled');
    }
    else {
        nextButton.setAttribute('disabled', 'disabled');
        backButton.removeAttribute('disabled', 'disabled');
    }
}