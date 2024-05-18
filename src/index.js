import './style.css'
import { Task, Project } from './createProjects'
import { displayProjectNavigation } from './displayingToDom/ProjectDOMHandler'
import { displayHomePage } from './displayingToDom/displayHomePage/displayHomePage'


const projectOne = new Project('sam', 'A newly created project')
const projectTwo = new Project('Liam', "a very fun project")
const projectThree = new Project("Mai", "A very fun project")
const projectFive = new Project('assaf', 'An extremely neat project')
const projectFour = new Project("sharon", "A very fun project")

const taskone = new Task('Buy Milk', "Two Gallons", '2024-11-03', "3", )
const taskTwo = new Task('Buy Cat Food', "Two packs", '2024-11-03', '1',)
taskTwo.switchCompletion()
const taskThree = new Task('Buy Avocados', "3", '2024-11-03', '4', )
taskThree.switchCompletion()
const taskFour= new Task('Buy new shoes', "Timberlands", '2024-11-03', '4',)

projectOne.addTask(taskone)
projectOne.addTask(taskTwo)
projectOne.addTask(taskThree)

projectTwo.addTask(taskFour)    


console.log(Project.allProjects)
displayProjectNavigation()
displayHomePage()