import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const day = document.querySelector('span[data-days]')
const hour = document.querySelector('span[data-hours]')
const minute = document.querySelector('span[data-minutes]')
const second = document.querySelector('span[data-seconds]')

btnStart.setAttribute('disabled', true)

let userData 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userData = selectedDates[0];
      if (userData > Date.now()){
        btnStart.disabled = false
      } else {
        Notify.failure('Виберіть кореткну дату');
      }
    },
  };


  flatpickr(input, options);
  

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };
  let timer

  function startTimer (){
    btnStart.setAttribute('disabled', true)
    timer = setInterval(()=> {
        const currentTime = convertMs(userData - Date.now());
        //
        const sumDateSeconds = Object.values(currentTime).reduce((a, b) => a + b, 0);
         if (sumDateSeconds < 0) {
        clearInterval(timer);
        return;
    }
        //
        
        day.textContent = addZero(currentTime.days);
        hour.textContent = addZero(currentTime.hours);
        minute.textContent = addZero(currentTime.minutes);
        second.textContent = addZero(currentTime.seconds);
    })
  }

  function addZero(value){
    return value.toString().padStart(2, "0")
  }

  btnStart.addEventListener('click', startTimer)