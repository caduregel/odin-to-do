import './style.css'

import createUser from './createUser'
import createProject from './createProject'
import createTask from './createTask'

const user = createUser('Liam')

user.project1 = createProject("groceris", "")
user.project2 = createProject("School", "math")

user.project1.task1 = createTask('milk', '', '5 may', 1)
user.project1.task2 = createTask('milk', '', '5 may', 1)
user.project1.task3 = createTask('milk', '', '5 may', 1)

console.log(user)