import { Project } from "./createProjects"

export const displayProjectNavigation = function () {
    let allProjects = Project.allProjects
    const eachProject = allProjects.map(function (element) {
        const newProjectDisplay = document.createElement('li')
        newProjectDisplay.textContent = element.name
        newProjectDisplay.setAttribute("class", "projectListItem")

        newProjectDisplay.addEventListener('click', () => {
            displayProject(element)
        })

        return newProjectDisplay
    })

    eachProject.forEach(element => {
        document.querySelector('.side-bar-list').appendChild(element)
    });
}

export const displayProject = function (project) {
    document.querySelector('#tasks-container').innerHTML = ''
    document.querySelector('#project-name-header').textContent = project.name
    document.querySelector('#project-description-header').textContent = project.description
    const tasksDisplay = project.tasks.map(function (projectTasks) {
        const newTaskDisplay = document.createElement('div')
        newTaskDisplay.classList.add('task')

        const taskName = document.createElement('p')
        taskName.textContent = projectTasks.name

        const taskDescription = document.createElement('p')
        taskDescription.textContent = projectTasks.description

        const taskDueDate = document.createElement('p')
        taskDueDate.textContent = projectTasks.dueDate

        const taskComplete = document.createElement('input')
        taskComplete.setAttribute('type', 'checkbox')

        taskComplete.addEventListener('click', ()=>{
            if(projectTasks.completed == false){
                projectTasks.completed = true
            } else{
                projectTasks.completed = false
            }  
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