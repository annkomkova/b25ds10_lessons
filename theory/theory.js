// let userName = 'Аня',
//   userAge = 90,
//   userPet = 'кот'

// let userName = 'Ира',
//   message = `Привет, ${userName}! Как дела?`
// let number = 20.5678
// let bigInt = 123456789098765432345678976543n
// let boolean = 5 > 1
// let isActive = null
// let count
// let colors = ['red', '#ffff00', '#000']

// let question = confirm('Как твоё настроение?')
// console.log(question)

// let question = prompt('Как твоё настроение?', 'норм')
// if (question == null) {
//   alert(`Ответь на вопрос`)
//   question = prompt('Как твоё настроение?', 'норм')
// } else {
//   alert(`Интересно, почему ${question}...`)
// }

// console.log(10 > 10)
// console.log(10 < 0)
// console.log(10 >= 10)
// console.log(10 <= 0)
// console.log(10 == '10')
// console.log(10 === '10')

// console.log(true == 1)
// console.log(true === 1)

// let userAge = prompt('Сколько тебе лет?', '20')

// if (userAge >= 18) {
//   console.log('доступ разрешён')
// } else if (userAge <= 5) {
//   console.log('позови родителей')
// } else {
//   console.log('доступ запрещён')
// }

// let userAge = prompt('Сколько тебе лет?', '20')
// let message

// if (userAge >= 18) {
//   message = 'доступ разрешён'
// } else if (userAge <= 5) {
//   message = 'позови родителей'
// } else {
//   message = 'доступ запрещён'
// }
// console.log(message)

document.addEventListener('DOMContentLoaded', () => {
  // clickCnt()
  // findElement()
  changeBoxColor()
})

function changeBoxColor() {
  let box = document.querySelector('.box')
  let button = document.querySelector('button')

  button.addEventListener('click', () => {
    box.classList.toggle('navyColor')
  })
}

function findElement() {
  let textTag = document.querySelector('p')
  let textClass = document.querySelector('.text')
  let textID = document.querySelector('#text')
  let allTexts = document.querySelectorAll('p')

  // console.log(textTag)
  // console.log(textClass)
  // console.log(textID)
  // console.log(allTexts)

  textTag.innerText = 'это текст из js'

  allTexts.forEach((text) => {
    text.innerText = 'замена текста'
  })
}

function clickCnt() {
  let clickButton = document.querySelector('.clickButton')
  let textMessage = document.querySelector('.text')
  let cnt = 0
  let message

  clickButton.addEventListener('click', () => {
    cnt += 1

    if (cnt < 10) {
      message = 'мало накликал'
    } else if (cnt % 10 == 0) {
      message = `юбилейный  клик!`
    } else if (cnt < 25 && cnt > 10) {
      message = `уже ${cnt} раз накликал!`
    } else if (cnt >= 25) {
      message = `остановись, уже ${cnt} раз кликнул!`
    }

    textMessage.innerText = message
  })
}
