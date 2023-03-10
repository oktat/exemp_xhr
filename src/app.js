
const addButton = document.querySelector('#addButton');
const tbody = document.querySelector('#tbody');
const host = 'http://localhost:3000/';

function getEmployees() {
    let endpoint = 'employees';
    let url = host + endpoint;
    let http = new XMLHttpRequest();
    http.open('get', url);
    http.send();    
    http.addEventListener('load', () => {
        let emps = http.responseText;
        renderTable(JSON.parse(emps));
    });
}

function renderTable(employees) {
    tbody.textContent = '';
    employees.forEach(emp => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdSalary = document.createElement('td');
    
        tdId.textContent = emp.id;
        tdName.textContent = emp.name;
        tdCity.textContent = emp.city;
        tdSalary.textContent = emp.salary;
    
        tbody.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);
            
    });

}

getEmployees();




function addEmployee(employee) {    
    let endpoint = 'employees';
    let url = host + endpoint;
    let http = new XMLHttpRequest();
    http.open('post', url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.setRequestHeader('Accept', 'application/json');
    http.send(JSON.stringify(employee));
    http.addEventListener('load', () => {
        let emp = http.responseText;
        console.log(emp);
        getEmployees();
    });    
}

function saveCreatedEmployee() {
    let employee = {
        name: 'Veréb Irén',
        city: 'Szeged',
        salary: 393
    };
    addEmployee(employee);
}

addButton.addEventListener('click', () => {    
    saveCreatedEmployee();
})


