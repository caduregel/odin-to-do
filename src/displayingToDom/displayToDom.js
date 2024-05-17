import { Project, Task } from "../createProjects"
import { displayTasksToDom } from "./displayTasksToDom"


export const displayProjectNavigation = function () {
    document.querySelector('.side-bar-list').innerHTML = ''
    let allProjects = Project.allProjects
    let currentProject = undefined

    const eachProject = allProjects.map(function (element) {
        // Element refers to the project that is currently being iterated over
        const newProjectDisplay = document.createElement('li')
        newProjectDisplay.textContent = element.name
        newProjectDisplay.setAttribute("class", "projectListItem")

        newProjectDisplay.addEventListener('click', () => {
            // Calls to display a project to the page
            currentProject = element
            displayProject(element)
        })
        return newProjectDisplay
    })

    // Deleting the project
    document.querySelector('#delete-project').addEventListener('click', () => {
        // To be done: Change page to homepage
        currentProject.deleteProject(currentProject)
        displayProjectNavigation()
    })

    eachProject.forEach(element => {
        document.querySelector('.side-bar-list').appendChild(element)
    });
}

// Displaying a projects name, description, and tasks to the page when clicking on it from the sidebar
export const displayProject = function (project) {

    // Changing the header name and description to the clicked project
    document.querySelector('#project-name-header').textContent = project.name
    document.querySelector('#project-description-header').textContent = project.description

    // Adding a task
    document.querySelector('#new-task').addEventListener('click', () => {
        const task = new Task('', '', '', '')
        project.addTask(task)
        displayTasksToDom(project)
    })

    displayTasksToDom(project)
}