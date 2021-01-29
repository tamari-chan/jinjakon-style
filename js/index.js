// ハンバーガーメニュー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('btn__triggar--sp');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav__open');
  });
}
toggleNav();

// スクロールイン
ScrollReveal().reveal('.melit__box', {
  origin: 'bottom',
  distance: '100px',
  duration: 1200,
  reset: true,
});

// ページ内リンク移動
$(function(){
  $('a[href^="#"]').on('click',function(){
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    console.log(href);
     $('html').animate({scrollTop:pos},1000);
  });
})


// アコーディオンメニュー
$(function(){
  $('.question').on('click',function(){
    $(this).next().slideToggle(1000,"easeInOutBack");
  });
})

