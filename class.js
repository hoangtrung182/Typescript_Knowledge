"use strict";
// CLASS  //
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number 
    // readonly male: boolean
    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // } 
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, " , age: ").concat(this.age, ", gender: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var Student = /** @class */ (function () {
    function Student(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Student.prototype.print = function () {
        return "".concat(this.name, " is ").concat(this.age, " and ").concat(this.male);
    };
    return Student;
}());
var me = new Student('Trung', 22, true);
console.log(me);
var henry = new Employee('Henry', 30, true);
// console.log(henry.name)
// console.log(henry.age)
// henry.name = 'Trung'
// henry.age = 20
// console.log(henry)
// console.log(henry.print())
var bob = new Employee('bob', 25, true);
var employees = [];
employees.push(henry);
employees.push(bob);
employees.forEach(function (employee) {
    return console.log(employee.name, employee.male, employee.print());
});
