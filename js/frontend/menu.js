function setupMenuToggle() {
    const toggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    if (toggle && sideMenu) {
        toggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
        });
    }

    if (closeBtn && sideMenu) {
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }
}
