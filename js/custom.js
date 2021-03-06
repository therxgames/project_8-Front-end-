const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('#open-sub').click(() => {
	$('#open-sub').css('display', 'none')
	$('#close-sub').css('display', 'flex')
	$('.mobile__nav').toggle()
	$('.main').addClass('main-active')
})

$('#close-sub').click(() => {
	$('#close-sub').css('display', 'none')
	$('#open-sub').css('display', 'flex')
	$('.mobile__nav').toggle()
	$('.main').removeClass('main-active')
})

$('.promo-button').click(() => {
	$('.promocodes-block-wrap').css('display','flex')
})