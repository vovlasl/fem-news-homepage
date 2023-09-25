const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-menu-close");
const body = document.querySelector("body");
const navToggleStyle = window.getComputedStyle(navToggle);

navToggle.addEventListener('click', () => {
    navigation.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    
    let temp = "";
    temp = iconMenu.getAttribute("style");
    iconMenu.setAttribute("style", iconMenuClose.getAttribute("style"));
    iconMenuClose.setAttribute("style", temp);

    if (iconMenuClose.getAttribute("style") == "display: block;") {
        body.setAttribute("style", "overflow-y: hidden");
    } else {
        body.setAttribute("style", "overflow-y: visible");
    }

    navigation.toggleAttribute("data-visible");
});


window.displayListener = function () {
    if (navToggleStyle.getPropertyValue("display") == "none") {
        body.setAttribute("style", "overflow-y: visible;");
    } else {
        if (navigation.hasAttribute("data-visible")) {
            window.scrollTo(0, 0);
            body.setAttribute("style", "overflow-y: hidden");
        } else {
            body.setAttribute("style", "overflow-y: visible");
        }
    }
}