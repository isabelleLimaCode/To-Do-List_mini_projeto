
interface task{
    id: number;
    title: string;
}


class TodoApp {
    private taskList: HTMLUListElement;
    private tasks:task[] = [];
    private netxId: number = 0;

    constructor(taskList: HTMLUListElement){
        this.taskList = taskList;
    }

    //metodos
    //add
    add(title: string): void{
        const task: task ={ id: this.netxId++, title};
        this.tasks.push(task);
        this.render();
    }
    //remover
    remove(id: number): void{
        this.tasks = this.tasks.filter(item => item.id !== id);
    }

    //render

    private render(): void{
        this.taskList.innerHTML = "";
        this.tasks.forEach((task) => {

            const li = document.createElement('li');
            li.className ="flex w-full border-solid border-[1px] rounded justify-between items-center p-2 mb-1";


            const title = document.createElement('p');
            title.textContent = task.title;
            li.appendChild(title);

            const button = document.createElement('button');
            button.className ="bg-red-500 text-white px-2 py-2 rounded";
            button.textContent = 'Deletar';

            button.addEventListener('click', () => this.remove(task.id));

            li.appendChild(button);
            this.taskList.appendChild(li);
        });
    }
}




document.addEventListener('DOMContentLoaded', () => {
 const taskList = document.getElementById('listTask') as HTMLUListElement;
 const tasknew = document.getElementById('newTask') as HTMLInputElement;
 const taskAdd = document.getElementById('addTask') as HTMLButtonElement;

 const todoApp = new TodoApp(taskList);
 taskAdd.addEventListener('click', (event) => {
    event.preventDefault(); 
    const title = tasknew.value.trim();
    if (title){
        todoApp.add(title);
        tasknew.value = '';
    }
 });
});