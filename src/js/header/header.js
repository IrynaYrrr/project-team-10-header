const theBody = document.querySelector('body');
const openNav = document.querySelector('.header-menu button');
const closeNav = document.querySelector('.header-close-nav button');
const HeaderNavbar = document.querySelector('.header-navbar');
const toggleButton = document.querySelector('.header-toggle');

if(window.location.pathname === "/index.html") {
  document.querySelector('.header-shopping').classList.remove('header-active');
  document.querySelector('.header-home').classList.add('header-active');
} else if(window.location.pathname === "/shopping-list.html") {
  document.querySelector('.header-home').classList.remove('header-active');
  document.querySelector('.header-shopping').classList.add('header-active');
}

function show() {
  HeaderNavbar.classList.toggle('show');
  toggleButton.style.display = 'none';
}

function hide() {
  HeaderNavbar.classList.toggle('show');
  toggleButton.style.display = 'block';

}

openNav.onclick = show;
closeNav.onclick = hide;
