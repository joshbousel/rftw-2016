$(function() {
	$doc =$(document);

	$(".rftw-header__menu-button").on("click",function() {
		$menu = $(this);
		$menuButtom = $(".rftw-header__menu-button");
		$mobileNav = $(".rftw-mobile-nav");
		$mobileNav.css({ height: $doc.height() - $(".rftw-header").outerHeight() })

		if ($mobileNav.hasClass("rftw-mobile-nav--is-open")) {
			$mobileNav.removeClass("rftw-mobile-nav--is-open");
			$menuButtom.removeClass("rftw-header__menu-button--is-open");
		} else {
			$mobileNav.addClass("rftw-mobile-nav--is-open");
			$menuButtom.addClass("rftw-header__menu-button--is-open");
		}
	});
	
	
});