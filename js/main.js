const burgerBtn = document.querySelector(".nav__burger-btn");
const mobileNav = document.querySelector(".nav__list--mobile");
const mobileNavShadow = document.querySelector(".nav__shadow");

const handleMobileNavigation = () => {
	burgerBtn.classList.toggle("nav__burger-btn--active");
	mobileNav.classList.toggle("nav__list--mobile--active");
    mobileNavShadow.classList.toggle('nav__shadow--active');
};

burgerBtn.addEventListener("click", handleMobileNavigation);
