const pikcha = document.getElementById("pikcha")

const originalArr = Array.from(pikcha.children)


function shuffle() {
const imgs = Array.from(pikcha.children);

imgs.sort(() => Math.random() - 0.5);

imgs.forEach(img => pikcha.appendChild(img));

}

function comparePositionElement(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

function confirm() {
    const currentArr = Array.from(pikcha.children)
    const isCorrect = comparePositionElement(originalArr, currentArr);

  
    let result = document.getElementById("result");
    if (!result) {
      result = document.createElement("div");
      pikcha.after(result);
    }
    
    if (isCorrect) {
        result.innerHTML = '<p>Вы не робот</p>' 
        setTimeout(() => {
          window.location.href = 'page2.html'
        }, 2000)
    } else {
      result.innerHTML ='<p>Вы робот</p>'
    }                   
}

document.getElementById("shuffleButton").addEventListener('click', shuffle)
document.getElementById("confirmButton").addEventListener('click', confirm)