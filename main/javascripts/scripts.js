flipCard()
moveProgressBar()
drawSVG()
showRandomImage()
showRandomText()

function showRandomText() {
  let quotes = [
    'Каждый день — это новый шанс изменить свою жизнь.',
    'Твоя сила в том, что ты продолжаешь идти вперед.',
    'Не бойся быть собой — это твоя суперсила.',
    'Верь в свои мечты, даже если они кажутся далекими.',
    'Пока не упал духом, любые другие падения по плечу.',
    'Если до вашей планки не дотягиваются, это не повод ее занижать.',
    'Мечты так и остаются мечтами, если к ним не идти.',
    'Разум бессилен перед криком сердца.',
    'Самый здоровый ответ на жизнь – это радость.',
    'Вы храбрее, чем думаете, сильнее, чем кажетесь, и умнее, чем считаете.'
  ]
  let button = document.querySelector('.randomTextButton')
  let text = document.querySelector('.randomText')

  let colors = ['blue', 'gold', 'green', 'purple']

  button.addEventListener('click', () => {
    // формула: Math.random() * (max - min) + min
    let randomID = Math.floor(Math.random() * (quotes.length - 1) + 1)
    let randomColor = Math.floor(Math.random() * colors.length)

    text.innerText = quotes[randomID]
    text.classList.remove(text.classList[1])
    text.classList.add(`${colors[randomColor]}`)
  })
}

function showRandomImage() {
  let button = document.querySelector('.randomImgButton')
  let img = document.querySelector('.showRandomImage img')

  button.addEventListener('click', () => {
    // формула: Math.random() * (max - min) + min
    let randomNumber = Math.floor(Math.random() * 7 + 1)

    img.src = `images/smeshariki/smesharik${randomNumber}.webp`
  })
}

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
