import './style.css'
import { Task, Project } from './createProjects'
import { displayProjectNavigation } from './displayingToDom/displayToDom'


const projectOne = new Project('sam', 'A newly created project')
const projectTwo = new Project('Liam', "a very fun project")
const projectThree = new Project("Mai", "A very fun project")
const projectFour = new Project("sharon", "A very fun project")



const taskone = new Task('Buy Milk', "Two Gallons", new Date(2024, 4, 13), "3", )
const taskTwo = new Task('Buy Cat Food', "Two packs", new Date(2025, 6, 3), '1',)
const taskThree = new Task('Buy Avocados', "3", new Date(2024, 7, 3), '4', )
const taskFour= new Task('Buy new shoes', "Timberlands", new Date(2024, 8), '4',)

projectOne.addTask(taskone)
projectOne.addTask(taskTwo)
projectOne.addTask(taskThree)

projectTwo.addTask(taskFour)    

console.log(Project.allProjects)
displayProjectNavigation()