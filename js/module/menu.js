export default function menuMoblie () {

  const menuList = document.querySelector ('.list-menu')
  const menuButton = document.querySelector ('.menu-moblie')

  function abrirMenu () {
    if(menuList.classList.contains('active')) {
      menuList.classList.remove('active')
      document.querySelector('.icon').src ="./img1/icone/icon-moblie.svg"
    } else {
      menuList.classList.add('active')
      document.querySelector('.icon').src ="./img1/icone/icon-close.svg" 
    } 
  }
  
menuButton.addEventListener('click', abrirMenu)
}

