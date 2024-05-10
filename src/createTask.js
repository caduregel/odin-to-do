
// Create Task object with title, description, due date and a priority
const createTask = function(title, description, dueDate, priority){
    let taskTitle = title
    let taskDescription = description
    let taskDueDate = dueDate
    let taskPriority = priority
    let completed = false

    return { taskTitle, taskDescription, taskDueDate, taskPriority, completed }
}

export default createTask