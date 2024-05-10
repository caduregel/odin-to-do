import './style.css'

import newTask from './createTasks'

let allTasks = []

const addToAllTasks = function(taskToAdd){
    allTasks.push(taskToAdd)
}

const taskOne = newTask('Buy Milk', '4 packs', '5 weeks', 3)
const taskTwo = newTask('Buy Eggs', '1 carton', 'Tomorrow', 2)
const taskThree = newTask('Buy Waffle mix', '1 pack', '1 year', 4)


addToAllTasks(taskOne)
addToAllTasks(taskTwo)
addToAllTasks(taskThree)

console.log(allTasks)