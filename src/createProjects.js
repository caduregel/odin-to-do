export class Task {
    constructor(id, name, description, dueDate, priority,) {
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

    switchCompletion(){
        if(this.completed == false){
            this.completed = true
        } else {this.completed = false}
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

    addTask(name) {
        const id = this.tasks.length
        this.tasks.push(new Task(id, name))
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(x => x.id !== id)
    }

    editName(newName) {
        this.name = newName
    }
    editDescription(newDescription) {
        this.description = newDescription
    }
}