const buttonOpen = document.querySelector('[data-toggle="open"]')
const buttonClose = document.querySelector('[data-toggle="close"]')

const navOverlay = document.querySelector(".nav__overlay")
const menuElement = document.querySelector(".nav__menu")

const toggleMenu = () => {
  menuElement.classList.toggle("active")
  navOverlay.classList.toggle("active")
  document.body.classList.toggle("scroll-prevent")
}

buttonOpen.addEventListener("click", toggleMenu)
buttonClose.addEventListener("click", toggleMenu)
menuElement.addEventListener("click", toggleMenu)

window.addEventListener("resize", () => {
  if (this.innerWidth >= 1100) if (menuElement.classList.contains("active")) toggleMenu()
})
