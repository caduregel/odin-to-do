import './style.css'
import { Task, Project } from './createProjects'
import { displayProjectNavigation } from './displayingToDom/ProjectDOMHandler'
import { displayHomePage } from './displayingToDom/displayHomePage/displayHomePage'
import { initializeProjects, saveProjectsToLocalStorage } from './localStorage'

initializeProjects();

console.log(Project.allProjects)
displayProjectNavigation()
displayHomePage()