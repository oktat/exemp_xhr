
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
    
        document.getElementById('tbody').append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);
            
    });

}

getEmployees();