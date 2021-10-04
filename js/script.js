function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

const swiper = new Swiper('.swiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});