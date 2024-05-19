import { Project, Task } from "../createProjects"
import { displayTasksToDom } from "./displayTasksToDom"
import { displayProjects, currentProject } from './displayProjectToDom'
import { displayHomePage } from "./displayHomePage/displayHomePage"
import { saveProjectsToLocalStorage } from "../localStorage"

export const displayProjectNavigation = function () {
    document.querySelector('.side-bar-list').innerHTML = ''
    displayProjects()


    document.querySelector('#new-project').addEventListener('click', () => {
        new Project('New Project', '')
        displayProjects()
        saveProjectsToLocalStorage()   
    })

    // Deleting the project
    document.querySelector('#delete-project').addEventListener('click', () => {
        // To be done: Change page to homepage
        let confirmation = confirm("Are you sure you want to remove this project?");
        if (confirmation) {
            currentProject.deleteProject(currentProject)
            displayProjectNavigation()
            displayHomePage()
            saveProjectsToLocalStorage()
        }

    })

    // Adding a task
    document.querySelector('#new-task').addEventListener('click', () => {
        const task = new Task('', '', '', '')
        currentProject.addTask(task)
        displayTasksToDom(currentProject)
        saveProjectsToLocalStorage()
    })


}

// Displaying a projects name, description, and tasks to the page when clicking on it from the sidebar
export const displayProject = function (project, onProject) {
    document.querySelector('#home-page').style.display = 'none'
    const projectHeader = document.querySelector('#project-header')
    if (onProject == true) {
        projectHeader.style.display = 'flex'
    }

    // Changing the header name and description to the clicked project
    const projectNameHeader = document.querySelector('#project-name-header')
    const projectDescriptionHeader = document.querySelector('#project-description-header')

    projectNameHeader.value = project.name
    projectDescriptionHeader.value = project.description

    // Entering a new Project Description
    projectNameHeader.addEventListener('focusout', () => {
        currentProject.editName(projectNameHeader.value)
        displayProjects()
        saveProjectsToLocalStorage()
    })

    // Entering a new Project Title
    projectDescriptionHeader.addEventListener('focusout', () => {
        currentProject.editDescription(projectDescriptionHeader.value)
        displayProjects()
        saveProjectsToLocalStorage()

    })


    displayTasksToDom(project)
}