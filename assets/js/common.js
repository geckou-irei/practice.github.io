$('.p-kv__slide').slick({
  infinite: true,
  dots: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,

});

Vue.component('works-card', {
  template: ' <div class = "works-card"><a href = "/" ><figure class = "works-card__img" ><img src = "/"alt = "" ></figure> <p class = "works-card__txt" >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト </p></a></div>'
})

const app = new Vue ({
  el: '#app'
})

