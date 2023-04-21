let dayBox = document.getElementById('day-box')
let hrBox = document.getElementById('hr-box')
let minBox = document.getElementById('min-box')
let secBox = document.getElementById('sec-box')
// console.log(dayBox)
// console.log(hrBox)
// console.log(minBox)
// console.log(secBox)
let endDate = new Date(2024, 0, 1, 00, 00)
let endTime = endDate.getTime()

function countdown() {
  let todayDate = new Date()
  let todayTime = todayDate.getTime()
  // console.log(todayTime)

  let remaininingTime = endTime - todayTime
  // console.log(remaininingTime)

  let oneMin = 60 * 1000
  let oneHr = 60 * oneMin
  let oneDay = 24 * oneHr
  //   console.log(oneMin)
  //   console.log(oneHr)
  //   console.log(oneDay)

  let addZeroes = (num) => (num < 10 ? `0${num}` : num)

  if (endTime < todayTime) {
    clearInterval(i)
    document.querySelector(
      '.countdown',
    ).innerHTML = `<h1>Countdown Has Expired</h1>`
  } else {
    let daysLeft = Math.floor(remaininingTime / oneDay)
    let hrsLeft = Math.floor((remaininingTime % oneDay) / oneHr)
    let minsLeft = Math.floor((remaininingTime % oneHr) / oneMin)
    let secsLeft = Math.floor((remaininingTime % oneMin) / 1000)
    dayBox.textContent = addZeroes(daysLeft)
    hrBox.textContent = addZeroes(hrsLeft)
    minBox.textContent = addZeroes(minsLeft)
    secBox.textContent = addZeroes(secsLeft)
  }
}

let i = setInterval(countdown, 1000)
countdown()
