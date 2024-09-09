export default function InitSmooth () {

const scrollSmooth = document.querySelectorAll (".js-scroll a[href^='#']")

function InitScrollSmooth (event) {
  event.preventDefault()
  const href = this.getAttribute("href")
  const section = document.querySelector (href)
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}


scrollSmooth.forEach((element) => {
  element.addEventListener("click", InitScrollSmooth)
})

}