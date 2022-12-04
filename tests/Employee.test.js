const Employee = require ('../lib/Employee')
test('should first', () => { 
    let employee = new Employee("John");
    expect(employee.name).toBe('John');
 })   