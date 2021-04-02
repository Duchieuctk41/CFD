let menus = document.querySelectorAll("header .menu a");

let heightHeader = document.querySelector("header").offsetHeight; // lấy chiều cao bao gồm padding và border
let sections = [];

function removeActiveMenu() {
  menus.forEach((menu_element, menu_index) => {
    menu_element.classList.remove("active");
  });
}

menus.forEach((element, index) => {
  let href = element.getAttribute("href");
  let className = href.replace("#", "");
  let section = document.querySelector("." + className);
  sections.push(section);

  element.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: section.offsetTop - heightHeader + 1,
      behavior: "smooth",
    });

    removeActiveMenu();
    element.classList.add("active");
  });
});

window.addEventListener("scroll", (e) => {
  let positionScroll = window.pageYOffset;

  sections.forEach((section, index) => {
    if (
      positionScroll > section.offsetTop - heightHeader &&
      positionScroll < section.offsetTop + section.offsetHeight
    ) {
      removeActiveMenu();
      menus[index].classList.add("active");
    } else {
      menus[index].classList.remove("active");
    }
  });
});
