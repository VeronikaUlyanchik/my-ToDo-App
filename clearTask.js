function deleteTodo(id) {
        
           const index=tasks.findIndex(item => item.id === id);
            tasks.splice(index, 1);
            todoField.innerHTML="";
            localStorage.setItem('tasks', JSON.stringify(tasks));
            tasks.forEach(t => {
                generateTask(t)
            });
       };

function clearAll() {
    tasks=[];
    localStorage.clear();
    todoField.innerHTML="";
}