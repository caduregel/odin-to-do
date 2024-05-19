import { Project } from "../../createProjects";

export const displayUrgentTasks = function () {

    // Step 1: Flatten the tasks into a single array
    const allTasks = Project.allProjects.reduce((acc, project) => {
        return acc.concat(project.tasks);
    }, []);

    // Step 2: Sort the tasks by due date
    const sortedTasks = allTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 5);

    const DOMallTasks = sortedTasks.map(function (task) {
        const Htmltask = document.createElement('div')
        Htmltask.classList.add('urgent-task')

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
        document.querySelector('#urgent-tasks').appendChild(element)
    });
}