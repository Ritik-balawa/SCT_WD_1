/* script.js */

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('home');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffff';
    } else {
        navbar.style.backgroundColor = '#0000FF';
    }
});
