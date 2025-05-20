// menu bar js
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');

function openMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
}

function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);