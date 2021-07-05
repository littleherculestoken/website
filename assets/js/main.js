(function ($) {
	"use strict";

	$(window).on("load", function () {
		var preLoder = $(".loader-wrapper");
		preLoder.delay(700).fadeOut(500);
		$("body").addClass("loaded");
	});

	$(document).ready(function () {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		});
	});

	// Select all links with hashes
	$("a.page-scroll").on("click", function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, "") ===
				this.pathname.replace(/^\//, "") &&
			location.hostname === this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash),
				speed = $(this).data("speed") || 800;
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");

			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$("html, body").animate(
					{
						scrollTop: target.offset().top - 80,
					},
					speed
				);
			}
		}
	});

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 80) {
			$("header").addClass("nav-fixed");
		} else {
			$("header").removeClass("nav-fixed");
		}
	});

	//Show Hide dropdown-menu Main navigation
	$(document).ready(function () {
		$("button.navbar-toggler").on("click", function (e) {
			var $el = $(this);
			var $parent = $(this).offsetParent(".navbar-collapse");
			if (!$(this).next().hasClass("show")) {
				$(this)
					.parents(".navbar-collapse")
					.first()
					.find(".show")
					.removeClass("show");
			}
			var $subMenu = $(this).next(".navbar-collapse");
			$subMenu.toggleClass("show");

			$(this).parent("li").toggleClass("show");

			$(this)
				.parents("li.nav-item.dropdown.show")
				.on("hidden.bs.dropdown", function (e) {
					$(".navbar-collapse .show").removeClass("show");
				});

			return false;
		});
	});

	const $dropdown = $(".dropdown");
	const $dropdownToggle = $(".dropdown-toggle");
	const $dropdownMenu = $(".dropdown-menu");
	const showClass = "show";

	$(window).on("load resize", function () {
		if (this.matchMedia("(min-width: 768px)").matches) {
			$dropdown.hover(
				function () {
					const $this = $(this);
					$this.addClass(showClass);
					$this.find($dropdownToggle).attr("aria-expanded", "true");
					$this.find($dropdownMenu).addClass(showClass);
				},
				function () {
					const $this = $(this);
					$this.removeClass(showClass);
					$this.find($dropdownToggle).attr("aria-expanded", "false");
					$this.find($dropdownMenu).removeClass(showClass);
				}
			);
		} else {
			$dropdown.off("mouseenter mouseleave");
		}
	});

	// $(document).ready(function () {
	// 	$(".dropdown a.dropdown-toggle").on("click", function (e) {
	// 		console.log(e);
	// 		var $el = $(this);
	// 		var $parent = $(this).offsetParent(".dropdown-menu");
	// 		if (!$(this).next().hasClass("show")) {
	// 			$(this)
	// 				.parents(".dropdown-menu")
	// 				.first()
	// 				.find(".show")
	// 				.removeClass("show");
	// 		}
	// 		var $subMenu = $(this).next(".dropdown-menu");
	// 		$subMenu.toggleClass("show");

	// 		$(this).parent("li").toggleClass("show");

	// 		$(this)
	// 			.parents("li.nav-item.dropdown.show")
	// 			.on("hidden.bs.dropdown", function (e) {
	// 				$(".dropdown-menu .show").removeClass("show");
	// 			});

	// 		return false;
	// 	});
	// });

	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a.nav_item");

	$.each(navbarLinks, function (i, val) {
		var navbarLink = $(this);

		navbarLink.on("click", function () {
			navBar.find(".navbar-collapse").collapse("hide");
			$("header").removeClass("active");
		});
	});

	//Main navigation Active Class Add Remove
	$(".navbar-toggler").on("click", function () {
		$("header").toggleClass("active");
	});
	$(document).on("ready", function () {
		if ($(window).width() > 991) {
			$("header").removeClass("active");
		}
		$(window).on("resize", function () {
			if ($(window).width() > 991) {
				$("header").removeClass("active");
			}
		});
	});

	$(function () {
		$("#doc_select").change(function () {
			$(".document_tab .tab-pane").removeClass("show active");
			$("#" + $(this).val()).addClass("show active");
		});
	});

	$(window).on("load", function () {
		document.onkeydown = function (e) {
			if (e.keyCode == 123) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
				return false;
			}

			if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
				return false;
			}
		};

		
	});
})(jQuery);
