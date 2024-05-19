import { Project } from "../../createProjects";

export const displayUncompletedTasks = function () {

    let allTasks = Project.allProjects.reduce((acc, project) => {
        return acc.concat(project.tasks);
    }, []);

    const uncompletedTasks = allTasks.filter(task => !task.completed).slice(0, 5);


    const DOMallTasks = uncompletedTasks.map(function(task){
        const Htmltask = document.createElement('div')
        Htmltask.classList.add('uncompleted-task')

        const taskTitle = document.createElement('p')
        taskTitle.textContent = task.name

        const taskDescription = document.createElement('p')
        taskDescription.textContent = task.description

        const taskDueDate = document.createElement('p')
        taskDueDate.textContent = task.dueDate

        Htmltask.appendChild(taskTitle)
        Htmltask.appendChild(taskDescription)
        Htmltask.appendChild(taskDueDate)

        return Htmltask
    })

    DOMallTasks.forEach(element => {
        document.querySelector('#uncompleted-tasks').appendChild(element)
    });
}