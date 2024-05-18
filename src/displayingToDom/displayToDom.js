import { Project, Task } from "../createProjects"
import { displayTasksToDom } from "./displayTasksToDom"
import { displayProjects, currentProject } from './displayProjectToDom'

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
        const projectHeader = document.querySelector('#project-header')
        projectHeader.style.display = 'none'
        currentProject.deleteProject(currentProject)
            projectHeader.style.display = 'none'
        displayProjectNavigation()
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

    const projectHeader = document.querySelector('#project-header')
    if (onProject == true) {
        projectHeader.style.display = 'flex'
    }

    // Changing the header name and description to the clicked project
    document.querySelector('#project-name-header').textContent = project.name
    document.querySelector('#project-description-header').textContent = project.description

    displayTasksToDom(project)
}