
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
}