import { saveProjectsToLocalStorage } from "../localStorage"

export const displayTasksToDom = function (project) {
    // Display the tasks section of a project
    const tasksDisplay = project.tasks.map(function (projectTasks) {
        document.querySelector('#tasks-container').innerHTML = ''

        const newTaskDisplay = document.createElement('div')
        newTaskDisplay.classList.add('task')

        const taskName = document.createElement('input')
        taskName.setAttribute('type', 'input')
        taskName.value = projectTasks.name

        const taskDescription = document.createElement('input')
        taskDescription.setAttribute('type', 'input')
        taskDescription.value = projectTasks.description

        const taskDueDate = document.createElement('input')
        taskDueDate.setAttribute('type', 'date')
        taskDueDate.value = projectTasks.dueDate

        const taskComplete = document.createElement('input')
        taskComplete.setAttribute('type', 'checkbox')
        taskComplete.checked = projectTasks.completed

        const deleteTask = document.createElement('button')
        deleteTask.textContent = 'x'

        // Entering a new Task Title
        taskName.addEventListener('focusout', () => {
            projectTasks.editName(taskName.value)
            saveProjectsToLocalStorage()
        })

        // Entering a new Task Description
        taskDescription.addEventListener('focusout', () => {
            projectTasks.editDescription(taskDescription.value)
            saveProjectsToLocalStorage()
        })

        // Entering a new Task Due Date
        taskDueDate.addEventListener('focusout', () => {
            projectTasks.editDueDate(taskDueDate.value)
            saveProjectsToLocalStorage()
        })

        //  Setting the task to complete
        taskComplete.addEventListener('click', () => {
            projectTasks.switchCompletion()
            saveProjectsToLocalStorage()
        })

        // Deleting a task
        deleteTask.addEventListener('click', () => {
            project.deleteTask(projectTasks)
            displayTasksToDom(project)
            saveProjectsToLocalStorage()
        })


        newTaskDisplay.appendChild(taskName)
        newTaskDisplay.appendChild(taskDescription)
        newTaskDisplay.appendChild(taskDueDate)
        newTaskDisplay.appendChild(taskComplete)
        newTaskDisplay.appendChild(deleteTask)

        return newTaskDisplay
    })



    tasksDisplay.forEach(function (element) {
        document.querySelector('#tasks-container').appendChild(element)
    })
}