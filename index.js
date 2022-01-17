const handleClick = () => {
  const nav = document.getElementById("mynav");
  nav.classList.toggle("show");
};

const handleLinkClick = () => {
  const nav = document.getElementById("mynav");
  nav.classList.remove("show");
  console.log("test2");
};
const listItems = document.querySelectorAll(".nav__item");
listItems.forEach((element) => {
  element.addEventListener("click", handleLinkClick);
});
