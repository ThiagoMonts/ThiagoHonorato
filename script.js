const burguer = document.getElementById('burguer');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

burguer.addEventListener('click', toggleMenu);

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})


