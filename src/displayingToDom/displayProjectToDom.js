import { Project } from "../createProjects"
import { displayProject } from "./ProjectDOMHandler"

export let currentProject = undefined

export const displayProjects = function () {
    document.querySelector('.side-bar-list').innerHTML = ''
    const allprojects = Project.allProjects
    const eachProject = allprojects.map(function (element) {
        // Element refers to the project that is currently being iterated over
        const newProjectDisplay = document.createElement('li')
        newProjectDisplay.textContent = element.name
        newProjectDisplay.setAttribute("class", "projectListItem")

        newProjectDisplay.addEventListener('click', () => {
            // Calls to display a project to the page
            currentProject = element
            document.querySelector('#tasks-container').innerHTML = ''
            displayProject(element, true)
        })
        return newProjectDisplay
    })

    eachProject.forEach(element => {
        document.querySelector('.side-bar-list').appendChild(element)
    });
}


