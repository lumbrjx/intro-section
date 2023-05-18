let menuToggle = document.querySelector('.navbar-toggler')
console.log('hello')
const sideMenu = document.querySelector('#side-menu')

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active')
})
