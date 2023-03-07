console.log("\n");
var employees = [
    {
     "id": 1,
     "name": "John Doe",
     "designation": "Manager",
     "salary": 50000
    },
    {
     "id": 2,
     "name": "Jane Smith",
     "designation": "Developer",
     "salary": 40000
    },
    {
     "id": 3,
     "name": "Mike Smith",
     "designation": "Sales Executive",
     "salary": 35000
    },
    {
     "id": 4,
     "name": "Sarah Williams",
     "designation": "Tester",
     "salary": 45000
    }
];
   
// Function to add a new employee to the list
function addEmployee(employee) {
    employees.push(employee);
}
// Function to delete an employee from the list by ID
function deleteEmployee(id) {
    for(let key in employees){
        if (employees[key].id == id){
            employees.splice(key,key);
            break;
        }
    }
}
// Function to update an employee's details by ID
function updateEmployee(id, updatedEmployee) {
    for(let key in employees){
        if (employees[key].id == id){
            employees[key].name = updatedEmployee.name;
            employees[key].designation= updatedEmployee.designation;
            employees[key].salary = updatedEmployee.salary;
            break;
        }
    }
}
// Functions to filter employees
function filterEmployeesByID(id){
    for(let key in employees){
        if (employees[key].id == id){
            return employees[key];
            break;
        }
    }
}
function filterEmployeesBySalary(salary) {
    emps = []
    for(let key in employees){
        if (employees[key].salary >= salary){
            emps.push(employees[key]);
        }
    }
    return emps;
}
function filterEmployeesByName(name) {
    emps = []
    for(let key in employees){
        if (employees[key].name.includes(name,0)){
            emps.push(employees[key]);
        }
    }
    return emps;
}
function filterEmployeesByDesig(desig) {
    emps = []
    for(let key in employees){
        if (employees[key].designation == desig){
            emps.push(employees[key]);
        }
    }
    return emps;
}

console.log("All employees:\n", employees);

console.log("\n");
addEmployee({
    "id": 5,
    "name": "Alex Brown",
    "designation": "Designer",
    "salary": 38000
});
console.log("After adding employee at ID 5:\n", employees);

console.log("\n");
deleteEmployee(2);
console.log("After deleting employee with ID 2:\n", employees);

console.log("\n");
updateEmployee(1, {
    "name": "John Smith",
    "designation": "Senior Manager",
    "salary": 60000
});
console.log("After updating employee with ID 1:\n", employees);

console.log("\n");
var filteredEmployees = filterEmployeesBySalary(46000);
console.log("Employees with salary above 46000:\n", filteredEmployees);
console.log("\n");
filteredEmployees = filterEmployeesByID(4);
console.log("Employees with ID 4:\n", filteredEmployees);
console.log("\n");
filteredEmployees = filterEmployeesByName("Smith");
console.log("Employees whose name as Smith:\n", filteredEmployees);
console.log("\n");
filteredEmployees = filterEmployeesByDesig("Designer");
console.log("Employees with designation Designer:\n", filteredEmployees);
console.log("\n");