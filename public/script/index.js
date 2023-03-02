const dateP = document.querySelector('.date');
const dayP = document.querySelector('.day');
const todoCount = document.querySelector('.todo-count');
const addBtn = document.querySelector('.add-btn-container');
const bg = document.querySelector('.bg');
const addInput = document.querySelector('.add-input-container');

const dayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let todoList = [];

const dt = new Date();

dateP.innerHTML = dt.getFullYear()+'년 '+(dt.getMonth()+1)+'월 '+dt.getDate()+'일';
dayP.innerHTML = dayArray[dt.getDay()];
todoCount.innerHTML = '할 일 ' + todoList.length + ' 개 남았엉'

addBtn.addEventListener('touchstart',()=>{
    addBtn.classList.toggle('active');
    console.log(addBtn.childNodes)
    addBtn.childNodes[1].classList.toggle('active');
    bg.classList.toggle('active')
    addInput.classList.toggle('active')
})