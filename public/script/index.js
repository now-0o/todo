const dateP = document.querySelector('.date');
const dayP = document.querySelector('.day');
const todoCount = document.querySelector('.todo-count');

const dayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const dt = new Date();

dateP.innerHTML = dt.getFullYear()+'년 '+(dt.getMonth()+1)+'월 '+dt.getDate()+'일';
dayP.innerHTML = dayArray[dt.getDay()];
todoCount.innerHTML = '할 일 ' + ' 개 남음'