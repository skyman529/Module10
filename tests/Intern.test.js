const Intern = require ('../lib/Intern')
test('should first', () => { 
    let intern = new Intern("John");
    expect(intern.name).toBe('John');
 })   
 test('should first', () => { 
     let intern = new Intern("John", 1, "test@test.com", "School");
     expect(intern.school).toBe("School");
  })   
  test('should first', () => { 
    let intern = new Intern("John", 1, "test@test.com", "School");
    expect(intern.getRole()).toBe("Intern");
 })   