// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  // a generator function to iterate over employees
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }
  
  return employeeIterator();
}

