const menu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector('.btnMenu-open')
const btnMenuClose = document.querySelector('.btnMenu-close')

btnMenuOpen.addEventListener('click', () => {
  menu.classList.add('menu-open')
})

btnMenuClose.addEventListener('click', () => {
  menu.classList.remove('menu-open')
})