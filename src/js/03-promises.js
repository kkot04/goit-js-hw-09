import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form')
const inputs = document.querySelectorAll('input')
const delayInput = document.querySelector('[name="delay"]')
const stepInput = document.querySelector('[name="step"]')
const amountInput = document.querySelector('[name="amount"]')
const createBtn = document.querySelector('button[type="submit"]')



createBtn.setAttribute('disabled', true)

form.addEventListener('input', () =>{
  const inputsValue = [...inputs].some(input => input.value === '')
  if(inputsValue){
    createBtn.setAttribute('disabled', true)
  } else{
    createBtn.removeAttribute('disabled')
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i +=1) {
    createPromise(i, delay); 
    delay += step;
  }
})


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((fulfill, reject) => {
    if (shouldResolve) {
      fulfill (`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
  }).then(arr => {
    setTimeout(() => {
      Notify.success(arr);
    }, delay)
  } )
  .catch((arr) => {
    setTimeout(() => {
      Notify.failure(arr);
    }, delay)
  }); 


}




