// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const btnStart = document.querySelector('.start-btn');
const dataDay = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

btnStart.disabled = true;

let userSelectedDate;
let difference;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    difference = userSelectedDate.getTime() - Date.now();
    if (userSelectedDate < Date.now()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
        iconUrl: iconClose,
      });
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },

  onChange(selectedDates) {
    if (selectedDates.length === 0) {
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function onTimer(difference) {
  const timer = convertMs(difference);
  dataDay.textContent = `${addLeadingZero(timer.days)}`;
  dataHours.textContent = `${addLeadingZero(timer.hours)}`;
  dataMinutes.textContent = `${addLeadingZero(timer.minutes)}`;
  dataSeconds.textContent = `${addLeadingZero(timer.seconds)}`;
}

function onStart() {
  timerInterval = setInterval(() => {
    if (difference <= 0) {
      clearInterval(timerInterval);
    } else {
      onTimer(difference);
      difference -= 1000;
    }
  }, 1000);
}

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', () => {
  onStart();
});