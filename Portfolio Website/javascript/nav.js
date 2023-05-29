// Get mobile buttons and nav
const menu = document.getElementsByClassName('burger')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];
const desktopNav = document.getElementsByClassName('desktop-nav')[0];

// Toggle nav states
menu.addEventListener('click', () => {
    menu.classList.toggle('open-nav');
    mobileNav.classList.toggle('open-nav');
})
