document.addEventListener("DOMContentLoaded", function () {
	const drawerToggle = document.getElementById("my-drawer-3");
	const navbar = document.querySelector(".navbar");
	const mobileMenuLinks = document.querySelectorAll(".drawer-side .menu a");
	let lastScrollTop = 0;

	mobileMenuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			drawerToggle.checked = false;
		});
	});

	window.addEventListener("scroll", function () {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		if (currentScrollTop > 10) {
			navbar.classList.add("shadow-md");
		} else {
			navbar.classList.remove("shadow-md");
		}

		if (currentScrollTop > lastScrollTop && drawerToggle.checked) {
			drawerToggle.checked = false;
		}

		lastScrollTop = currentScrollTop;
	});

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			if (targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
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
