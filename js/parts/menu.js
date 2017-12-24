(function(){
  var menu_switches = document.querySelectorAll('.header__switch');
  var menu = document.querySelector('.menu__list');
  var search = document.querySelector('.header__form');
  menu_switches[1].addEventListener("click", function(){
    search.classList.remove('header__form_active');
    menu.classList.toggle('menu__list_active');
  });
  menu_switches[0].addEventListener("click", function(){
    search.classList.toggle('header__form_active');
    menu.classList.remove('menu__list_active');
  });
})();
