import { Project } from "../../createProjects"

export const displayProjects = function () {
    const projectsToDisplay = Project.allProjects.slice(0, 3)
    const displayedProjects = projectsToDisplay.map(function (project) {
        const HTMLProject = document.createElement('div')
        HTMLProject.classList.add('project-card')

        const HTMLProjectTitle = document.createElement('h2')
        HTMLProjectTitle.textContent = project.name

        const HTMLProjectDescription = document.createElement('p')
        HTMLProjectDescription.textContent = project.description

        const threeTasks = project.tasks.slice(0, 3)
        const HTMLThreeTasks = threeTasks.map(function (task) {
            const HTMLtask = document.createElement('div')
            HTMLtask.classList.add('task-card-container')

            const taskTitle = document.createElement('p')
            taskTitle.textContent = task.name

            const taskCompleted = document.createElement('input')
            taskCompleted.setAttribute('type', 'checkbox')
            taskCompleted.checked = task.completed

            taskCompleted.addEventListener('click', () => {
                task.switchCompletion()
            })

            HTMLtask.appendChild(taskTitle)
            HTMLtask.appendChild(taskCompleted)

            return HTMLtask
        })

        HTMLProject.appendChild(HTMLProjectTitle)
        HTMLProject.appendChild(HTMLProjectDescription)

        HTMLThreeTasks.forEach(element => {
            HTMLProject.append(element)
        });

        return HTMLProject
    })

    displayedProjects.forEach(function (element) {
        document.querySelector('#biggest-projects').appendChild(element)
    })
}