const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toogleMunu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toogleMunu);
    mobileMenu.addEventListener('click', toogleMunu)
};

document.addEventListener('DOMContentLoaded', initApp);