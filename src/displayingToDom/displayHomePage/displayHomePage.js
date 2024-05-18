import { Project } from "../../createProjects"
import { displayProjects } from "./displayProjectsHome";
import { displayUncompletedTasks } from "./displayUncompleted";
import { displayUrgentTasks } from "./displayUrgentTasks";

export const displayHomePage = function () {
    document.querySelector('#home-button').addEventListener('click', () => {
        document.querySelector('#home-page').style.display = 'grid'
        document.querySelector('#project-header').style.display = 'none'
        document.querySelector('#tasks-container').innerHTML = ''

        document.querySelector("#biggest-projects").innerHTML = ''
        document.querySelector("#uncompleted-tasks").innerHTML = ''
        document.querySelector('#urgent-tasks').innerHTML = ''

        // Dispaly Top Projects
        displayProjects()
        // Display urgent tasks
        displayUrgentTasks()
        // Display unfinished tasks
        displayUncompletedTasks()
    })

    displayProjects()
    displayUrgentTasks()
    displayUncompletedTasks()
}
