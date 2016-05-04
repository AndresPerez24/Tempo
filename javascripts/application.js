$(function(){
	$('.js-main-nav__button').click(function(){
		$('.js-main-nav').addClass('main-nav--expanded');
	});
	$('.js-main-nav').click(function(){
		$(this).removeClass('main-nav--expanded');
	})
});