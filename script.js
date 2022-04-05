var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    var slides = document.getElementsByClassName('header__background');
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
function plusSlide() {
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
}
setInterval((plusSlide), 8000);


let iconMenu = document.querySelector('.header__nav_1');
if (iconMenu) {
    let menuBody = document.querySelector('.header__nav_2');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    });
    let menuHide1 = document.querySelector('.control_1')
    menuHide1.addEventListener('click', function (e) {
        menuBody.classList.remove('_active')
        document.body.classList.remove('_lock');
    });
    let menuHide2 = document.querySelector('.control_2')
    menuHide2.addEventListener('click', function (e) {
        menuBody.classList.remove('_active')
        document.body.classList.remove('_lock');
    });
}




