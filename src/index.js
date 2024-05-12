import './style.css'
import { Task, Project } from './createProjects'
import { displayProjectNavigation } from './displayToDom'

const projectOne = new Project('sam', 'A newly created project')
const projectTwo = new Project('Liam', "a very fun project")
const projectThree = new Project("Mai", "A very fun project")

const taskone = new Task('Buy Milk', "Two Gallons", "TOmorrow,", "3", )
const taskTwo = new Task('Buy Cat Food', "Two packs", "sunday,", '1',)
const taskThree = new Task('Buy Avocados', "3", "12 may,", '4', )
const taskFour= new Task('Buy new shoes', "Timberlands", "2025,", '4',)

projectOne.addTask(taskone)
projectOne.addTask(taskTwo)
projectOne.addTask(taskThree)

projectTwo.addTask(taskFour)    

console.log(projectOne.tasks)

displayProjectNavigation()