const switchBtn = document.querySelector('.header__switch-btn');
const switchOn = document.querySelector('.header__switch-on');
const headerContainer = document.querySelector('.header__container');

const headerLogo = document.querySelector('.header__logo');
const burgerSvg = document.querySelector('.header__svg-light');

const headerHome = document.querySelector('.header-home');
const headerShopping = document.querySelector('.header-shopping');
const shoppingSvg = document.querySelector('.header-shopping');


const burgerBtn = document.querySelector('.header__burger-btn');
const closeBtn = document.querySelector('.header__close-btn');


if(window.location.pathname === "/index.html") {
  document.querySelector('.header-home').classList.add('header-active');
  document.querySelector('.header-shopping').classList.remove('header-active');
} else if(window.location.pathname === "/shopping-list.html") {
  document.querySelector('.header-shopping').classList.add('header-active');
  document.querySelector('.header-home').classList.remove('header-active');
}

switchBtn.addEventListener('click', onSwitchClick);

function onSwitchClick() {

  if(!switchBtn.classList.contains('header__switch-on')){
    this.classList.add('header__switch-on');
    headerContainer.classList.add('header__dark-theme');
    burgerSvg.classList.add('header__burderSvg-dark');
    closeBtn.classList.add('header__closeSvg-dark');
    headerHome.style.color = "white";
    headerShopping.style.color = "white";
    shoppingSvg.classList.add('header__closeSvg-dark');
  } else {
    this.classList.remove('header__switch-on');
    headerContainer.classList.remove('header__dark-theme');
    burgerSvg.classList.remove('header__burderSvg-dark');
    closeBtn.classList.remove('header__closeSvg-dark');
    headerHome.style.color = "black";
    headerShopping.style.color = "black";
    shoppingSvg.classList.remove('header__closeSvg-dark');
  }

  if (headerLogo.innerHTML.includes('svg#icon-logo--dark')){
    headerLogo.innerHTML = headerLogo.innerHTML.replace('svg#icon-logo--dark', 'svg#icon-logo');
  }
  else {
    headerLogo.innerHTML = headerLogo.innerHTML.replace('svg#icon-logo', 'svg#icon-logo--dark');
  }

}


burgerBtn.addEventListener('click', onClickBurder);

function onClickBurder(){
  closeBtn.style.display = "inline";
  burgerBtn.style.display = "none";
}


closeBtn.addEventListener('click', onClickClose);

function onClickClose(){
  closeBtn.style.display = "none";
  burgerBtn.style.display = "inline";
}
