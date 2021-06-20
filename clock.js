'use strict';

function showTime() {
  const theTime = new Date();

let hour = addLeadingZero(theTime.getHours());
const minutes = addLeadingZero(theTime.getMinutes());
const seconds = addLeadingZero(theTime.getSeconds());
const isAm = hour < 12 || hour === 0;
let amPm = isAm ? 'AM' : 'PM';

 // Current Time
const currentTime = `${formatHour(hour)}:${minutes}:${seconds} ${amPm}`;


let timeOne = document.querySelector('.timeOne');
timeOne.textContent = currentTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}


function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}



function showDate() {
  
const theDate = new Date();
const weekDay = theDate.getDay();
const day = weekDays[weekDay];
const dayOfMonth = theDate.getMonth();
const month = months[dayOfMonth];
const date = theDate.getDate();
const currentYear = theDate.getFullYear();
const timeTwo = document.querySelector('.timeTwo')


timeTwo.textContent = `${day}, ${month} ${formatDateSuffix(date)} ${currentYear}`
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

showTime();
showDate();

setInterval(() => {
  showTime();
  showDate();
}, 1000);








