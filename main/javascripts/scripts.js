flipCard()
moveProgressBar()
drawSVG()

function drawSVG() {
  let star = document.querySelector('.svgLine')
  let length = star.getTotalLength()

  star.style.strokeDasharray = length
  star.style.strokeDashoffset = length

  window.addEventListener('scroll', () => {
    let scrollPercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let draw = length * scrollPercent
    star.style.strokeDashoffset = length - draw
  })
}

function moveProgressBar() {
  let button = document.querySelector('.progressBarButton')
  let progress = document.querySelector('.progressBarLine')
  let number = document.querySelector('.progressBarNumber')
  let isActive = true
  let width = 0

  button.addEventListener('click', () => {
    if (isActive) {
      setInterval(() => {
        progress.style.opacity = 1

        if (width < 100) {
          width++
          progress.style.width = width + '%'
          number.innerText = `${width}%`
        } else {
          isActive = false
        }
      }, 50)
    }
  })
}

function flipCard() {
  let flipCards = document.querySelectorAll('.flipCardWrapper')

  flipCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip')
    })
  })
}
