document.addEventListener("DOMContentLoaded", function () {
	const drawerToggle = document.getElementById("my-drawer-3");
	const navbar = document.querySelector(".navbar");
	const mobileMenuLinks = document.querySelectorAll(".drawer-side .menu a");
	let lastScrollTop = 0;

	// Handle mobile menu link clicks
	mobileMenuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			drawerToggle.checked = false;
		});
	});

	// Handle scroll events
	window.addEventListener("scroll", function () {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;

		// Add/remove shadow based on scroll position
		if (currentScrollTop > 10) {
			navbar.classList.add("shadow-md");
		} else {
			navbar.classList.remove("shadow-md");
		}

		// Close drawer when scrolling down
		if (currentScrollTop > lastScrollTop && drawerToggle.checked) {
			drawerToggle.checked = false;
		}

		lastScrollTop = currentScrollTop;
	});

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			if (targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				// Add offset for fixed navbar
				const navbarHeight = navbar.offsetHeight;
				const elementPosition = targetElement.offsetTop - navbarHeight;

				window.scrollTo({
					top: elementPosition,
					behavior: "smooth",
				});
			}
		});
	});
});
