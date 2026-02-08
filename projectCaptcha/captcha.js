const captcha = document.getElementById("captcha")

const originalArr = Array.from(captcha.children)

let failedAttempts = 0
function shuffle() {
const imgs = Array.from(captcha.children);

imgs.sort(() => Math.random() - 0.5);

imgs.forEach(img => captcha.appendChild(img));

}

function comparePositionElement(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

function confirm() {
    const currentArr = Array.from(captcha.children)
    const isCorrect = comparePositionElement(originalArr, currentArr);

  
    let result = document.getElementById("result");
    if (!result) {
      result = document.createElement("div");
      result.id = "result";
      captcha.after(result);
    }
    
    if (isCorrect) {
        result.textContent = '<p>Вы не робот</p>' 
        setTimeout(() => {
          window.location.href = 'page2.html'
        }, 2000)
    } else {

      failedAttempts++

      if (failedAttempts >= 3) {
          result.textContent = 'Вы заблокированы. Обратитесь к администратору'
      } else {
          result.textContent = `Ошибка. Осталось попыток: ${3 - failedAttempts}`
      }
    }
  }                   

document.getElementById("shuffleButton").addEventListener('click', shuffle)
document.getElementById("confirmButton").addEventListener('click', confirm)