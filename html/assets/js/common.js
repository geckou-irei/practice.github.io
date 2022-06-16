$('.p-kv__slide').slick({
  infinite: true,
  dots: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  
});

// function checkMedia() {
//   slickWindow = $(window).width();
//   if (slickWindow <= 768) {
//     // スマホ向け（768px以下のとき）
//     $('.scroll__item').not('.slick-initialized').slick({
//       //スライド記述
//       dots: true,
//       
//       speed: 300,
//       slidesToShow: 1,
//       adaptiveHeight: true,
//       variableWidth: true
//     });
//   } else {
//     // PC向け unslickで対象クラスのslickを無効
//     $('.scroll__item.slick-initialized').slick('unslick');
//   }
// }
// // ウインドウがリサイズする度にチェック
// $(window).resize(function () {
//   checkMedia();
// });
// // 初回チェック
// checkMedia();

