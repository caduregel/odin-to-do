import { Task, Project } from "./createProjects";

const projectsKey = 'projectsKey';

function createTaskFromObject(obj) {
    const task = new Task(obj.name, obj.description, obj.dueDate, obj.priority);
    task.completed = obj.completed; // Preserve the completed status
    return task;
}

function createProjectFromObject(obj) {
    const project = new Project(obj.name, obj.description);
    project.tasks = obj.tasks.map(taskObj => createTaskFromObject(taskObj));
    return project;
}


export const saveProjectsToLocalStorage = function () {
    localStorage.setItem(projectsKey, JSON.stringify(Project.allProjects));
}

export const loadProjectsFromLocalStorage = function () {
    const data = localStorage.getItem(projectsKey);
    if (data) {
        const plainProjects = JSON.parse(data);
        return plainProjects.map(createProjectFromObject);
    }
    return [];
}

export const initializeProjects = function () {
    Project.allProjects = []

    const savedProjects = loadProjectsFromLocalStorage();
    if (savedProjects.length > 0) {
        Project.allProjects = savedProjects;
    } else {
        // Create the default projects and tasks
        const defaultProjects = [
            new Project("Groceries", "Weekly Meal Prep"),
            new Project("Work", "Office Tasks"),
            new Project("Health", "Fitness and Wellness"),
            new Project("Home Improvement", "House Renovation Projects"),
            new Project("Learning", "Self-Education Goals"),
            new Project("Travel", "Vacation Planning")
        ];

        // Add tasks to "Groceries" project
        defaultProjects[0].addTask(new Task('milk', "2 glasses", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('Chocolate Flakes', "3 packs", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('Avocados', "4", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('Yoghurt', "3% 500g", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('eggs', "2 dozen", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('bananas', "GoodFoods", '2024-08-13', '1'));
        defaultProjects[0].addTask(new Task('Cake', "Chocolate", '2024-08-13', '1'));

        // Add tasks to "Work" project
        defaultProjects[1].addTask(new Task('Email', "Reply to client emails", '2024-05-20', '1'));
        defaultProjects[1].addTask(new Task('Meeting', "Project meeting with team", '2024-05-21', '1'));
        defaultProjects[1].addTask(new Task('Report', "Finish quarterly report", '2024-05-22', '2'));
        defaultProjects[1].addTask(new Task('Presentation', "Prepare slides for presentation", '2024-05-23', '1'));
        defaultProjects[1].addTask(new Task('Follow-up', "Follow up with HR", '2024-05-24', '3'));
        defaultProjects[1].addTask(new Task('Budget', "Review budget proposals", '2024-05-25', '2'));
        defaultProjects[1].addTask(new Task('Documentation', "Update project documentation", '2024-05-26', '1'));

        // Add tasks to "Health" project
        defaultProjects[2].addTask(new Task('Yoga', "Morning yoga session", '2024-05-20', '1'));
        defaultProjects[2].addTask(new Task('Run', "Evening 5km run", '2024-05-21', '1'));
        defaultProjects[2].addTask(new Task('Meditation', "30 minutes meditation", '2024-05-22', '2'));
        defaultProjects[2].addTask(new Task('Workout', "Strength training", '2024-05-23', '1'));
        defaultProjects[2].addTask(new Task('Nutrition', "Plan weekly meals", '2024-05-24', '2'));
        defaultProjects[2].addTask(new Task('Checkup', "Annual health checkup", '2024-05-25', '3'));
        defaultProjects[2].addTask(new Task('Hydration', "Drink 8 glasses of water", '2024-05-26', '1'));

        // Add tasks to "Home Improvement" project
        defaultProjects[3].addTask(new Task('Painting', "Paint living room", '2024-06-01', '1'));
        defaultProjects[3].addTask(new Task('Gardening', "Plant new flowers", '2024-06-02', '1'));
        defaultProjects[3].addTask(new Task('Plumbing', "Fix kitchen sink", '2024-06-03', '2'));
        defaultProjects[3].addTask(new Task('Furniture', "Assemble new furniture", '2024-06-04', '1'));
        defaultProjects[3].addTask(new Task('Cleaning', "Deep clean the house", '2024-06-05', '2'));
        defaultProjects[3].addTask(new Task('Decorating', "Decorate guest room", '2024-06-06', '3'));
        defaultProjects[3].addTask(new Task('Electrical', "Install new light fixtures", '2024-06-07', '1'));

        // Add tasks to "Learning" project
        defaultProjects[4].addTask(new Task('Read Book', "Finish reading 'Sapiens'", '2024-07-01', '1'));
        defaultProjects[4].addTask(new Task('Online Course', "Complete JavaScript course", '2024-07-02', '1'));
        defaultProjects[4].addTask(new Task('Project', "Build a personal website", '2024-07-03', '2'));
        defaultProjects[4].addTask(new Task('Practice', "Practice coding problems", '2024-07-04', '1'));
        defaultProjects[4].addTask(new Task('Lecture', "Attend online lecture on AI", '2024-07-05', '2'));
        defaultProjects[4].addTask(new Task('Workshop', "Join local tech workshop", '2024-07-06', '3'));
        defaultProjects[4].addTask(new Task('Research', "Research new tech trends", '2024-07-07', '1'));

        // Add tasks to "Travel" project
        defaultProjects[5].addTask(new Task('Book Flights', "Book tickets to Paris", '2024-08-01', '1'));
        defaultProjects[5].addTask(new Task('Hotel Reservation', "Reserve hotel rooms", '2024-08-02', '1'));
        defaultProjects[5].addTask(new Task('Itinerary', "Plan daily itinerary", '2024-08-03', '2'));
        defaultProjects[5].addTask(new Task('Packing', "Pack luggage", '2024-08-04', '1'));
        defaultProjects[5].addTask(new Task('Sightseeing', "Book sightseeing tours", '2024-08-05', '2'));
        defaultProjects[5].addTask(new Task('Travel Insurance', "Buy travel insurance", '2024-08-06', '3'));
        defaultProjects[5].addTask(new Task('Currency Exchange', "Exchange currency", '2024-08-07', '1'));

        Project.allProjects = defaultProjects;
        saveProjectsToLocalStorage()
    }
}

export const updateProjects = function (newProjects) {
    Project.allProjects = newProjects;
    saveProjectsToLocalStorage();
}

