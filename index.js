const inquirer = require('inquirer');
const fs = require ('fs');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const { nextTick } = require('process');
const Team = []

function ManagerQueue(options) {
    return inquirer.prompt([{
            name: "employeesname",
          message: "ENTER MANAGER'S NAME",
          type: "input"},
          {
            name: "employeesid",
          message: "ENTER MANAGER'S ID",
          type: "input"},
          {
            name: "employeesemail",
          message: "ENTER MANAGER'S EMAIL",
          type: "input"},
          {
            name: "employeesofficenumber",
          message: "ENTER MANAGER'S OFFICE NUMBER",
          type: "input"},
          ]
    ).then(
        ans=>{
            let manager= new Manager(ans.employeesname,ans.employeesid,ans.employeesemail,ans.employeesofficenumber)
            Team.push(manager)
            next()
        }
    )
}
ManagerQueue()

function internquestions(){
// Inquirer prompt and push answers to Team Array(name,id,email, school)
return inquirer.prompt([{
    name: "employeesname",
  message: "ENTER INTERN'S NAME",
  type: "input"},
  {
    name: "employeesid",
  message: "ENTER INTERN'S ID",
  type: "input"},
  {
    name: "employeesemail",
  message: "ENTER INTERN'S EMAIL",
  type: "input"},
  {
    name: "employeesschoolname",
  message: "ENTER INTERN'S SCHOOL NAME",
  type: "input"},
  ]
).then(
ans=>{
    let intern= new Intern(ans.employeesname,ans.employeesid,ans.employeesemail,ans.employeesschoolname)
    Team.push(intern)
    next()
}
)
}
function engineerquestions(){
    // Inquirer prompt and push answers to Team Array
    return inquirer.prompt([{
        name: "employeesname",
      message: "ENTER ENGINEER'S NAME",
      type: "input"},
      {
        name: "employeesid",
      message: "ENTER ENGINEER'S ID",
      type: "input"},
      {
        name: "employeesemail",
      message: "ENTER ENGINEER'S EMAIL",
      type: "input"},
      {
        name: "employeesgithub",
      message: "ENTER ENGINEER'S GITHUB",
      type: "input"},
      ]
).then(
    ans=>{
        let engineer= new Engineer(ans.employeesname,ans.employeesid,ans.employeesemail,ans.employeesgithub)
        Team.push(engineer)
        next()
    }
)
}

function next(){
    inquirer.prompt([
        {
            name: "aftermanagerquestion",
            message: "WOULD YOU LIKE TO ADD A NEW EMPLOYEE?",
            type: "list",
            choices: ["Intern","Engineer","NO"]
        }
    ]).then(ans=>{
        if(ans.aftermanagerquestion==="Intern"){
            internquestions()
        }
        else if(ans.aftermanagerquestion==="Engineer"){
            engineerquestions()
        } else {
            // write team.html file and loop+append employee cards
            let teamHTML =""
            for(let i=0; i<Team.length; i++){
                let employee = Team[i]
                if (employee.getRole()==="Manager"){
                    special=employee.getOfficeNumber()
                }
                if (employee.getRole()==="Engineer"){
                    special=employee.getGithub()
                }
                if (employee.getRole()==="Intern"){
                    special=employee.getSchool()
                }
                teamHTML +=`<div>
                <h2>${employee.name}</h2>
                <h3>${employee.getRole()}</h3>
                <h3>${employee.id}</h3>
                <h3>${employee.email}</h3>
                <h3>${special}</h3>
                </div>`
            }
        let html=`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          ${teamHTML}
        </body>
        </html>`
        fs.writeFileSync("./dist/index.html", html)
        }
    })
}