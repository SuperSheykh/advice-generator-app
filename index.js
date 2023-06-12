const adTitle = document.getElementById('advice')
const adId = document.getElementById('ad-id')
const adText = document.getElementById('ad-text')
const adBtn = document.getElementById('button')

const getNewAdvice = () => {
   console.log('button clicked!')
   fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
         console.log(data.slip.advice)
         adId.textContent = data.slip.id
         adText.textContent = data.slip.advice
      })
}

getNewAdvice()

adBtn.addEventListener('click', getNewAdvice)
