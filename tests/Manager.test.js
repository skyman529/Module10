const Manager = require ('../lib/Manager')
test('should first', () => { 
    let manager = new Manager("John");
    expect(manager.name).toBe('John');
 })   
test('should first', () => { 
    let manager = new Manager("John", 1, "test@test.com", 2);
    expect(manager.officeNumber).toBe(2);
 })   