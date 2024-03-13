export default function initAnimation () {

  const numberAnimation = document.querySelectorAll ('[data-numero]');

  numberAnimation.forEach((numero) => {
    const total = +numero.innerText.replace(',', '');
    const inscremento = Math.floor( total / 100)
   

    let start = 0 
    const timer = setInterval(() => {
      start = start + inscremento
      numero.innerText = start
      if (start > total ) {
        clearInterval(timer)
      }
    }, 25 * Math.random());
  })
}