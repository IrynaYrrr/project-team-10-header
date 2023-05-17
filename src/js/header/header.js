// const theBody = document.querySelector('body');
// const openNav = document.querySelector('.header-menu button');
// const closeNav = document.querySelector('.header-close-nav button');
// const HeaderNavbar = document.querySelector('.header-navbar');
// const toggleButton = document.querySelector('.header-toggle');

// if(window.location.pathname === "/index.html") {
//   document.querySelector('.header-shopping').classList.remove('header-active');
//   document.querySelector('.header-home').classList.add('header-active');
// } else if(window.location.pathname === "/shopping-list.html") {
//   document.querySelector('.header-home').classList.remove('header-active');
//   document.querySelector('.header-shopping').classList.add('header-active');
// }

// function show() {
//   HeaderNavbar.classList.toggle('show');
//   toggleButton.style.display = 'none';
// }

// function hide() {
//   HeaderNavbar.classList.toggle('show');
//   toggleButton.style.display = 'block';

// }

// openNav.onclick = show;
// closeNav.onclick = hide;

// $('.switch-btn').click(function(){
//   $(this).toggleClass('switch-on');
// });





let switchBtn = document.querySelector('.header__switch-btn');
let switchOn = document.querySelector('.header__switch-on');
let headerContainer = document.querySelector('.header__container');
let logoLight = document.getElementById('header__icon-light');
let headerLogo = document.querySelector('.header__logo');
let burgerSvg = document.querySelector('.header__burderSvg-light');


switchBtn.addEventListener('click', onSwitchClick);

function onSwitchClick() {

  if(!switchBtn.classList.contains('header__switch-on')){
    this.classList.add('header__switch-on');
    headerContainer.classList.add('header__dark-theme');
    burgerSvg.classList.add('header__burderSvg-dark');
  } else {
    this.classList.remove('header__switch-on');
    headerContainer.classList.remove('header__dark-theme');
    burgerSvg.classList.remove('header__burderSvg-dark');
  }

  if (headerLogo.innerHTML.includes('svg#icon-logo--dark')) {
    headerLogo.innerHTML = headerLogo.innerHTML.replace('svg#icon-logo--dark', 'svg#icon-logo');
  }
  else {
    headerLogo.innerHTML = headerLogo.innerHTML.replace('svg#icon-logo', 'svg#icon-logo--dark');
  }

}
