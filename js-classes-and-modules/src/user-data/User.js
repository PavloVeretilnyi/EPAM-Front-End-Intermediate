export class User {

	firstName;
	lastName;
	age = 1;
	tasks = [];

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	setAge(newAge) {
		if (typeof newAge === "number" && newAge > 0 && isFinite(newAge)) {
            this.age = newAge;
        }
	}

	addTasks(tasks) {
		tasks.forEach(task => {
            if (task instanceof Task) {
                this.tasks.push(task);
            }
        });
	}

	getTasksCount() {
		return this.tasks.length;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

}