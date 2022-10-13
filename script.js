const burguer = document.getElementById('burguer');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

burguer.addEventListener('click', toggleMenu);