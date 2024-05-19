import { Project } from "./createProjects";

const projectsKey = 'projectsKey';

export const saveProjectsToLocalStorage = function () {
    localStorage.setItem(projectsKey, JSON.stringify(Project.allProjects));
}

export const loadProjectsFromLocalStorage = function () {
    const data = localStorage.getItem(projectsKey);
    return data ? JSON.parse(data) : [];
}

export const initializeProjects = function () {
    Project.allProjects = []

    const savedProjects = loadProjectsFromLocalStorage();
    if (savedProjects.length > 0) {
        Project.allProjects = savedProjects;
    } else {
        Project.allProjects = [
            {
                name: "Groceries", description: "Weekly Meal Prep", tasks: [
                    { name: 'milk', description: "2 glasses", dueDate: '2024-08-13', priority: '1', completed: false },
                    { name: 'Chocolate Flakes', description: "3 packs", dueDate: '2024-08-13', priority: '1', completed: false },
                    { name: 'Avocados', description: "4", dueDate: '2024-08-13', priority: '1', completed: true },
                    { name: 'Yoghurt', description: "3% 500g", dueDate: '2024-08-13', priority: '1', completed: false },
                    { name: 'eggs', description: "2 dozen", dueDate: '2024-08-13', priority: '1', completed: true },
                    { name: 'bananas', description: "GoodFoods", dueDate: '2024-08-13', priority: '1', completed: true },
                    { name: 'Cake', description: "Chocolate", dueDate: '2024-08-13', priority: '1', completed: false },
                ]
            },
            {
                name: "Work", description: "Office Tasks", tasks: [
                    { name: 'Email', description: "Reply to client emails", dueDate: '2024-05-20', priority: '1', completed: false },
                    { name: 'Meeting', description: "Project meeting with team", dueDate: '2024-05-21', priority: '1', completed: false },
                    { name: 'Report', description: "Finish quarterly report", dueDate: '2024-05-22', priority: '2', completed: true },
                    { name: 'Presentation', description: "Prepare slides for presentation", dueDate: '2024-05-23', priority: '1', completed: false },
                    { name: 'Follow-up', description: "Follow up with HR", dueDate: '2024-05-24', priority: '3', completed: true },
                    { name: 'Budget', description: "Review budget proposals", dueDate: '2024-05-25', priority: '2', completed: false },
                    { name: 'Documentation', description: "Update project documentation", dueDate: '2024-05-26', priority: '1', completed: false },
                ]
            },
            {
                name: "Health", description: "Fitness and Wellness", tasks: [
                    { name: 'Yoga', description: "Morning yoga session", dueDate: '2024-05-20', priority: '1', completed: false },
                    { name: 'Run', description: "Evening 5km run", dueDate: '2024-05-21', priority: '1', completed: true },
                    { name: 'Meditation', description: "30 minutes meditation", dueDate: '2024-05-22', priority: '2', completed: false },
                    { name: 'Workout', description: "Strength training", dueDate: '2024-05-23', priority: '1', completed: true },
                    { name: 'Nutrition', description: "Plan weekly meals", dueDate: '2024-05-24', priority: '2', completed: false },
                    { name: 'Checkup', description: "Annual health checkup", dueDate: '2024-05-25', priority: '3', completed: true },
                    { name: 'Hydration', description: "Drink 8 glasses of water", dueDate: '2024-05-26', priority: '1', completed: false },
                ]
            },
            {
                name: "Home Improvement", description: "House Renovation Projects", tasks: [
                    { name: 'Painting', description: "Paint living room", dueDate: '2024-06-01', priority: '1', completed: false },
                    { name: 'Gardening', description: "Plant new flowers", dueDate: '2024-06-02', priority: '1', completed: true },
                    { name: 'Plumbing', description: "Fix kitchen sink", dueDate: '2024-06-03', priority: '2', completed: false },
                    { name: 'Furniture', description: "Assemble new furniture", dueDate: '2024-06-04', priority: '1', completed: false },
                    { name: 'Cleaning', description: "Deep clean the house", dueDate: '2024-06-05', priority: '2', completed: true },
                    { name: 'Decorating', description: "Decorate guest room", dueDate: '2024-06-06', priority: '3', completed: false },
                    { name: 'Electrical', description: "Install new light fixtures", dueDate: '2024-06-07', priority: '1', completed: false },
                ]
            },
            {
                name: "Learning", description: "Self-Education Goals", tasks: [
                    { name: 'Read Book', description: "Finish reading 'Sapiens'", dueDate: '2024-07-01', priority: '1', completed: false },
                    { name: 'Online Course', description: "Complete JavaScript course", dueDate: '2024-07-02', priority: '1', completed: true },
                    { name: 'Project', description: "Build a personal website", dueDate: '2024-07-03', priority: '2', completed: false },
                    { name: 'Practice', description: "Practice coding problems", dueDate: '2024-07-04', priority: '1', completed: true },
                    { name: 'Lecture', description: "Attend online lecture on AI", dueDate: '2024-07-05', priority: '2', completed: false },
                    { name: 'Workshop', description: "Join local tech workshop", dueDate: '2024-07-06', priority: '3', completed: true },
                    { name: 'Research', description: "Research new tech trends", dueDate: '2024-07-07', priority: '1', completed: false },
                ]
            },
            {
                name: "Travel", description: "Vacation Planning", tasks: [
                    { name: 'Book Flights', description: "Book tickets to Paris", dueDate: '2024-08-01', priority: '1', completed: false },
                    { name: 'Hotel Reservation', description: "Reserve hotel rooms", dueDate: '2024-08-02', priority: '1', completed: true },
                    { name: 'Itinerary', description: "Plan daily itinerary", dueDate: '2024-08-03', priority: '2', completed: false },
                    { name: 'Packing', description: "Pack luggage", dueDate: '2024-08-04', priority: '1', completed: true },
                    { name: 'Sightseeing', description: "Book sightseeing tours", dueDate: '2024-08-05', priority: '2', completed: false },
                    { name: 'Travel Insurance', description: "Buy travel insurance", dueDate: '2024-08-06', priority: '3', completed: true },
                    { name: 'Currency Exchange', description: "Exchange currency", dueDate: '2024-08-07', priority: '1', completed: false },
                ]
            }

        ]
        saveProjectsToLocalStorage()
    }
}

export const updateProjects = function (newProjects) {
    Project.allProjects = newProjects;
    saveProjectsToLocalStorage();
}

