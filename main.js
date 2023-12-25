const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.burger-menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')

const toggleDisplay = (element) => {
  element.classList.toggle('inactive')
}

menuEmail.addEventListener('click', () => {
  toggleDisplay(desktopMenu)
})

burgerMenuIcon.addEventListener('click', () => {
  toggleDisplay(mobileMenu)
})
