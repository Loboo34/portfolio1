const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const translate = document.querySelector('.translate');
translate.addEventListener('mouseover',
    function() {
        translate.innerHTML = 'こんにちわ';
    });
translate.addEventListener('mouseout',
    function() {
        translate.innerHTML = 'Hello';
    });