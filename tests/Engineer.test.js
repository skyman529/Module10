const Engineer = require ('../lib/Engineer')
test('should first', () => { 
    let engineer = new Engineer("John");
    expect(engineer.name).toBe('John');
 })   
 test('should first', () => { 
    let engineer = new Engineer("John", 1, "test@test.com", "School");
    expect(engineer.github).toBe("School");
 })   
 test('should first', () => { 
   let engineer = new Engineer("John", 1, "test@test.com", "School");
   expect(engineer.getRole()).toBe("Engineer");
})   