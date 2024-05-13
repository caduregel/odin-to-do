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

        // Entering a new Task Title
        taskName.addEventListener('focusout', () => {
            projectTasks.editName(taskName.value)
            console.log(projectTasks)
        })

        // Entering a new Task Description
        taskDescription.addEventListener('focusout', () => {
            projectTasks.editDescription(taskDescription.value)
            console.log(project)
        })

        // Entering a new Task Due Date
        taskDueDate.addEventListener('focusout', () => {
            projectTasks.editDueDate(taskDueDate.value)
            console.log(project)
        })

        taskComplete.addEventListener('click', () => {
            projectTasks.switchCompletion()
        })

        newTaskDisplay.appendChild(taskName)
        newTaskDisplay.appendChild(taskDescription)
        newTaskDisplay.appendChild(taskDueDate)
        newTaskDisplay.appendChild(taskComplete)

        return newTaskDisplay
    })
    tasksDisplay.forEach(function (element) {
        document.querySelector('#tasks-container').appendChild(element)
    })
}