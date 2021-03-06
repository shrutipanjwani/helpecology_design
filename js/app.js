// Navbar Scrolling Animation
window.addEventListener("scroll", function () {
	let nav = document.querySelector("nav");
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle("scrolling-active", windowPosition);
});

// Navbar Responsiveness
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav .nav-links");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav.classList.toggle("active");
	window.scrollTo(0, 0);
});

document.addEventListener("click", (e) => {
	if (e.target.closest("nav .nav-links")) {
		hamburger.classList.remove("active");
		nav.classList.remove("active");
	}
});

// Images Scroll Reveal Animation
let imageItems = [...document.querySelectorAll(".img-wrap")];

let descriptions = [...document.querySelectorAll(".product-desc")];

let options = {
	rootMargin: "0px",
	threshold: 0.2,
};

let setItemActive = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
		}
	});
};

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, idx) => {
	item.children[0].style.backgroundImage = `url(./assets/${idx + 1}.jpg)`;
	idx % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
	observer.observe(item);
});

descriptions.forEach((desc, idx) => {
	idx % 2 == 0 ? (desc.style.left = "10%") : (desc.style.left = "55%");
	observer.observe(desc);
});
