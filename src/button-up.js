// const bodyEl = document.querySelector('body');
// const documEl = document.documentElement;
// const scrollEl = document.querySelector('.scrollup');
// let timeOut;

// scrollEl.addEventListener('click', goUp)

// function goUp() {
//   const top = Math.max(bodyEl.scrollTop, documEl.scrollTop);
//   if (top > 0) {
//       window.scrollTo(0,-100);
//       timeOut = setTimeout(goUp, 20);
//    } else clearTimeout(timeOut);
// }

// console.log(bodyEl.onscroll); 
// bodyEl.onscroll = function () {
//   if (bodyEl.scrollTop > documEl.clientHeight) {
//     scrollEl.style.opacity = "1";
//   } else {
//     scrollEl.style.opacity = "0";
//   }
// }
$(function () {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});