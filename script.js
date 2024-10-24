// Selecting the elements
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Show mobile menu when hamburger is clicked
openMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Hide mobile menu when close button or menu item is clicked
closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

mobileMenu.querySelectorAll('a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});
