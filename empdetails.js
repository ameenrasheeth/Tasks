let employees = [
    {
        EMPID: 101,
        EMPNAME: "John Doe",
        EMPSALARY: 50000,
        EMPDESIGNATION: "Software Engineer"
    },
    {
        EMPID: 102,
        EMPNAME: "Jane Smith",
        EMPSALARY: 60000,
        EMPDESIGNATION: "Project Manager"
    },
    {
        EMPID: 103,
        EMPNAME: "Mike Johnson",
        EMPSALARY: 55000,
        EMPDESIGNATION: "Business Analyst"
    }
];

for (let i = 0; i < 3; i++) {
    console.log("Employee ID: " + employees[i].EMPID);
    console.log("Employee Name: " + employees[i].EMPNAME);
    console.log("Employee Salary: " + employees[i].EMPSALARY);
    console.log("Employee Designation: " + employees[i].EMPDESIGNATION);
    console.log("-------------------------------");
}
