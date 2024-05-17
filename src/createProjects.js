
export class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = false
    }

    editName(newName) {
        this.name = newName
    }

    editDescription(newDescription) {
        this.description = newDescription
    }

    editDueDate(newDueDate) {
        this.dueDate = newDueDate
    }

    editPriority(newPriority) {
        this.priority = newPriority
    }

    switchCompletion() {
        if (this.completed == false) {
            this.completed = true
        } else { this.completed = false }
    }
}


export class Project {
    static allProjects = []

    constructor(name, description) {
        this.name = name
        this.description = description
        this.tasks = []
        Project.allProjects.push(this);
    }

    addTask(task) {
        // const id = this.tasks.length
        this.tasks.push(task)
    }

    deleteTask(task) {
        const index = this.tasks.indexOf(task);
        
        if (index > -1) { // only splice array when item is found
            this.tasks.splice(index, 1); // 2nd parameter means remove one item only
        }
        if(this.tasks.length == 0){
            document.querySelector('#tasks-container').innerHTML = ''
        }
    }

    editName(newName) {
        this.name = newName
    }
    editDescription(newDescription) {
        this.description = newDescription
    }

    deleteProject(project) {
        const index = Project.allProjects.indexOf(project);
        if (index > -1) { // only splice array when item is found
            Project.allProjects.splice(index, 1); // 2nd parameter means remove one item only
        }
    }
}