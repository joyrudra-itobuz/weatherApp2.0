const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu-container");

const showMenu = () => {
  console.log("Called!");
  menuContainer.classList.toggle("hidden");
  menuContainer.classList.toggle("menu-closing-animation");
  menuContainer.classList.toggle("menu-showing-animation");
  setTimeout(() => {
    menuContainer.classList.toggle("menu-bg-shadow");
  }, 450);
};

const closeMenu = () => {
  menuContainer.classList.toggle("menu-bg-shadow");
  menuContainer.classList.toggle("menu-closing-animation");
  menuContainer.classList.toggle("menu-showing-animation");
  setTimeout(() => {
    menuContainer.classList.toggle("hidden");
  }, 490);
};
