const sliders = document.querySelectorAll('corousel-container'); // Adicione o ponto antes de 'carousel-container'
const prevSlide = document.getElementById('prevBtn');
const nextSlide = document.getElementById('nextBtn');

let currentSlide = 0;

function hideSlider() {
    sliders.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    sliders[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider();
    if (currentSlide === sliders.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() { // Corrigido para 'prevSlider'
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = sliders.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

prevSlide.addEventListener('click', prevSlider);
nextSlide.addEventListener('click', nextSlider);

