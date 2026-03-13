// flipCard()
moveProgressBar()
drawSVG()
showRandomImage()
showRandomText()
animationPopup()
runningButton()
changeBlick()
// cursor()
eyes()
parallaxCircles()
animationFramesOnScroll()

function animationFramesOnScroll() {
  let body = document.querySelector('body')
  let slider = body.querySelector('.slider')
  let frames = body.querySelectorAll('.slider img')
  let totalFrames = frames.length

  window.addEventListener('scroll', () => {
    let rect = body.getBoundingClientRect()
    let vh = window.innerHeight

    let progress = (vh - rect.top) / (vh + rect.height)
    let p = Math.max(0, Math.min(1, progress))

    let frame = Math.floor(p * totalFrames)
    let percent = -(frame * 100)

    slider.style.marginLeft = `${percent}%`
  })
}

function parallaxCircles() {
  let section = document.querySelector('.parallax')
  let circles = document.querySelectorAll('.circle')

  window.addEventListener('scroll', () => {
    let rect = section.getBoundingClientRect()
    let vh = window.innerHeight

    let progress = (vh - rect.top) / (vh + rect.height)
    let p = Math.max(0, Math.min(1, progress))

    let moveY = (p - 0.6) * 400
    let moveX = (p - 0.5) * 100
    let scale = p * 0.3 + 1

    circles.forEach((circle) => {
      circle.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(${scale})`
    })
  })
}

function eyes() {
  let dots = document.querySelectorAll('.dot')

  document.addEventListener('mousemove', (event) => {
    dots.forEach((dot) => {
      let rect = dot.getBoundingClientRect()

      let dotX = rect.left + rect.width / 2
      let dotY = rect.top + rect.height / 2

      let dX = event.pageX - dotX
      let dY = event.pageY - dotY

      let angle = Math.atan2(dY, dX)
      let deg = (180 / Math.PI) * angle

      dot.style.transform = `rotate(${deg}deg)`
    })
  })
}

function cursor() {
  let cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (event) => {
    cursor.style.top = `${event.pageY}px`
    cursor.style.left = `${event.pageX}px`
  })
}

function changeBlick() {
  let coordX = document.querySelector('.coordX')
  let coordY = document.querySelector('.coordY')
  let sectionWH = document.querySelector('.sectionWH')
  let section = document.querySelector('.changeBlick')

  let img0 = document.querySelector('.blickImg0')
  let img1 = document.querySelector('.blickImg1')
  let img2 = document.querySelector('.blickImg2')
  let img3 = document.querySelector('.blickImg3')

  section.addEventListener('mousemove', (event) => {
    let cursorX = event.pageX
    let cursorY = event.pageY

    coordX.innerText = `cursor X: ${cursorX}`
    coordY.innerText = `cursor Y: ${cursorY}`

    let sectionW = section.getBoundingClientRect().width
    let sectionH = section.getBoundingClientRect().height

    sectionWH.innerText = `section width: ${sectionW}px; section height: ${sectionH}px`

    let halfSectionW = sectionW / 2
    let halfSectionH = sectionH / 2

    if (cursorX < halfSectionW && cursorY < halfSectionH) {
      img0.style.opacity = '1'
    } else {
      img0.style.opacity = '0'
    }
    if (cursorX > halfSectionW && cursorY < halfSectionH) {
      img1.style.opacity = '1'
    } else {
      img1.style.opacity = '0'
    }
    if (cursorX > halfSectionW && cursorY > halfSectionH) {
      img2.style.opacity = '1'
    } else {
      img2.style.opacity = '0'
    }
    if (cursorX < halfSectionW && cursorY > halfSectionH) {
      img3.style.opacity = '1'
    } else {
      img3.style.opacity = '0'
    }
  })
}

function runningButton() {
  let button = document.querySelector('.showAnimEl')
  let container = document.querySelector('.popupContainer')
  let section = document.querySelector('.header')

  let sectionWidth = section.getBoundingClientRect().width
  let sectionHeight = section.getBoundingClientRect().height

  let containerWidth = container.getBoundingClientRect().width
  let containerHeight = container.getBoundingClientRect().height

  let widthRange = sectionWidth - containerWidth
  let heightRange = sectionHeight - containerHeight

  button.addEventListener('click', () => {
    container.style.position = 'absolute'
    container.style.top = `${Math.random() * heightRange}px`
    container.style.left = `${Math.random() * widthRange}px`
  })
}

function animationPopup() {
  let popup = document.querySelector('.popup')
  let button = document.querySelector('.showAnimEl')

  button.addEventListener('click', () => {
    let popupEl = document.createElement('div')
    popupEl.classList.add('popupEl')
    popupEl.innerText = '🤍'

    popup.appendChild(popupEl)

    setTimeout(() => {
      popupEl.remove()
    }, 1550)
  })
}

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
