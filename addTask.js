let tasks = [];
const inputTask = document.getElementById('inputtask');
!localStorage.tasks ? tasks=[] : tasks = JSON.parse(localStorage.getItem('tasks'));
const todoField = document.querySelector('.todotasks')



function generateTask(newTask) {
    todoField.innerHTML+= `<div class="tasks task_button"> ${newTask.text} <button class="button-delete"  onclick=deleteTodo(${newTask.id})><span class="material-icons delete">delete</span></button> </div>`
}
    const form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
    
    const text = inputTask.value;
    if (text !== "") {
    addItem(text);
    inputTask.value = "";
    }})

function addItem(text) {
        const newTask = {
            text: text,
            id: Date.now(),
        };
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            generateTask(newTask);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const ref = localStorage.getItem('tasks');
        if (ref) {
            tasks = JSON.parse(ref);
            tasks.forEach(t => {
                generateTask(t);
    });
  }
});

