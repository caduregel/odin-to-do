import { Project } from "./createProjects"

export const displayProjectNavigation = function(){
    let allProjects = Project.allProjects
    const eachProject = allProjects.map(function(element){
        const newProjectDisplay = document.createElement('li')
        newProjectDisplay.textContent = element.name
        newProjectDisplay.setAttribute("class", "projectListItem")
        return newProjectDisplay
    })

    eachProject.forEach(element => {
        document.querySelector('.side-bar-list').appendChild(element)
    });
}

export const displayTasks = function(){
    
}