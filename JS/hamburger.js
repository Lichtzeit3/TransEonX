
window.addEventListener('load', doFirst);

function doFirst() {
    let element = document.querySelectorAll('.navbar');
    let ham = document.getElementById("hamburger");

    function toggleClass() {
        ham.classList.toggle("active");
    }

    ham.addEventListener('click', () => {
        element.forEach(ul => {
            ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
        });
        toggleClass();
    });

    let element1 = document.querySelector('.nav');
    let ham1 = document.getElementById("hamburger");

    function toggleClass() {
        ham1.classList.toggle("active");
    }

    ham1.addEventListener('click', () => {
        element1.style.display = element1.style.display === 'none' ? 'block' : 'none';
        toggleClass();
    });
}