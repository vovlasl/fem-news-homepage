const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-menu-close");

navToggle.addEventListener('click', () => {
    navigation.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    
    let temp = "";
    temp = iconMenu.getAttribute("style");
    iconMenu.setAttribute("style", iconMenuClose.getAttribute("style"));
    iconMenuClose.setAttribute("style", temp);
    navigation.toggleAttribute("data-visible");
});
