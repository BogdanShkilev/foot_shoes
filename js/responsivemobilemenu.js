jQuery(document).ready(function() {

	jQuery(".menu-trigger").click(function() {

		jQuery(".nav-menu").slideToggle(400, function(){

			jQuery(this).toggleClass("nav-expanded").css('display', '')

		});

	});
})
jQuery(document).ready(function() {

	jQuery(".click-options1").click(function() {

		jQuery(".drop1").slideToggle(400, function(){

			jQuery(this).toggleClass("nav-expanded").css('display: block', '')

		});

	});
})
jQuery(document).ready(function() {

	jQuery(".click-options2").click(function() {

		jQuery(".drop2").slideToggle(400, function(){

			jQuery(this).toggleClass("nav-expanded").css('display: block', '')

		});

	});
})
jQuery(document).ready(function() {

	jQuery(".click-options3").click(function() {

		jQuery(".drop3").slideToggle(400, function(){

			jQuery(this).toggleClass("nav-expanded").css('display: block', '')

		});

	});
})