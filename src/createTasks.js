const newTask = function (title, description, dueDate, priority) {

    let taskTitle = title
    let taskDescription = description
    let taskDueDate = dueDate
    let taskPriority = priority

    return { taskTitle, taskDescription, taskDueDate, taskPriority }
}

export default newTask