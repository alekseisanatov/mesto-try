const popup = document.querySelector('.popup');
const popup_close = document.querySelector('.popup__close');
const popup_open = document.querySelector('.profile__edit-button');

popup_open.addEventListener('click', ()=> {
  popup.style.display = 'block';
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
});

popup_close.addEventListener('click', ()=> {
  popup.style.display = 'none';
});


