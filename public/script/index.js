const dateP = document.querySelector('.date');
const dayP = document.querySelector('.day');
const todoCount = document.querySelector('.todo-count');
const addBtn = document.querySelector('.add-btn-container');
const bg = document.querySelector('.bg');
const addInputCon = document.querySelector('.add-input-container');
const addInput = document.querySelector('#todo');
const todolists = document.querySelector('.todo-lists');

const dayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let todoList = [];

const dt = new Date();

dateP.innerHTML = dt.getFullYear()+'년 '+(dt.getMonth()+1)+'월 '+dt.getDate()+'일';
dayP.innerHTML = dayArray[dt.getDay()];
todoCount.innerHTML = '할 일 ' + todoList.length + ' 개 남았엉'

addBtn.addEventListener('touchstart',()=>{
    addBtn.classList.toggle('active');
    addBtn.childNodes[1].classList.toggle('active');
    bg.classList.toggle('active');
    addInputCon.classList.toggle('active');
})

addInput.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        e.preventDefault();
        todoList.push(e.target.value);
        e.target.value = ''
        todoCount.innerHTML = '할 일 ' + todoList.length + ' 개 남았엉'
        addBtn.classList.toggle('active');
        addBtn.childNodes[1].classList.toggle('active');
        bg.classList.toggle('active');
        addInputCon.classList.toggle('active');
        let todoDom = '';
        const todoLi = `
            <li class='todolist'>
                <input type='checkbox' id='todoli'>
                <label for='todoli'>${todoList[todoList.length-1]}</label>
            </li>
        `
        todoDom += todoLi;
        todolists.innerHTML += todoDom;
    }
})