"use strict";
class TodoApp {
    constructor(taskList) {
        this.tasks = [];
        this.netxId = 0;
        this.taskList = taskList;
    }
    //metodos
    //add
    add(title) {
        const task = { id: this.netxId++, title };
        this.tasks.push(task);
        this.render();
    }
    //remover
    remove(id) {
        this.tasks = this.tasks.filter(item => item.id !== id);
    }
    //render
    render() {
        this.taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = "flex w-full border-solid border-[1px] rounded justify-between items-center p-2 mb-1";
            const title = document.createElement('p');
            title.textContent = task.title;
            li.appendChild(title);
            const button = document.createElement('button');
            button.className = "bg-red-500 text-white px-2 py-1 rounded";
            button.textContent = 'Deletar';
            li.appendChild(button);
            this.taskList.appendChild(li);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('listTask');
    const tasknew = document.getElementById('newTask');
    const taskAdd = document.getElementById('addTask');
    const todoApp = new TodoApp(taskList);
    taskAdd.addEventListener('click', () => {
        const title = tasknew.value.trim();
        if (title) {
            todoApp.add(title);
            tasknew.value = '';
        }
    });
});
