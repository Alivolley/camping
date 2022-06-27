const $ = document;
const menuOpener = $.querySelector(".menu-opener");
const collapseMenu = $.querySelector(".collapse-menu");

function showCollapseMenu() {
  collapseMenu.classList.toggle("collapse-menu--show");
  menuOpener.classList.toggle("menu-opener--hide");
}

menuOpener.addEventListener("click", showCollapseMenu);
