let text = '{ "employees" : [' +
'{ "firstName": "John", "lastName": "Doe"},' +
'{ "firstName": "Anna", "lastName": "Smith"} ]}'

const obj = JSON.parse(text)

console.log(text)
document.getElementById("console").innerHTML = obj.employees[0].firstName + " and " + obj.employees[1].firstName