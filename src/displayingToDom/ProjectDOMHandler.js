import { Project, Task } from "../createProjects"
import { displayTasksToDom } from "./displayTasksToDom"
import { displayProjects, currentProject } from './displayProjectToDom'
import { displayHomePage } from "./displayHomePage/displayHomePage"

export const displayProjectNavigation = function () {
    document.querySelector('.side-bar-list').innerHTML = ''
    displayProjects()


    document.querySelector('#new-project').addEventListener('click', () => {
        new Project('New Project', '')
        displayProjects()
        console.log('priject')
    })

    // Deleting the project
    document.querySelector('#delete-project').addEventListener('click', () => {
        // To be done: Change page to homepage
        let confirmation = confirm("Are you sure you want to remove this project?");
        if (confirmation) {
            currentProject.deleteProject(currentProject)
            displayProjectNavigation()
            displayHomePage()
        }

    })

    // Adding a task
    document.querySelector('#new-task').addEventListener('click', () => {
        const task = new Task('', '', '', '')
        currentProject.addTask(task)
        displayTasksToDom(currentProject)
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

    // Entering a new Task Description
    projectNameHeader.addEventListener('focusout', () => {
        currentProject.editName(projectNameHeader.value)
        displayProjects()
    })

    // Entering a new Task Title
    projectDescriptionHeader.addEventListener('focusout', () => {
        currentProject.editDescription(projectDescriptionHeader.value)
        displayProjects()
    })


    displayTasksToDom(project)
}