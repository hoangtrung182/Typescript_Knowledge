

// CLASS  //

export class Employee {
    // public name: string
    // private age: number 
    // readonly male: boolean

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // } 
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) {}

    print() {
        return `Name: ${this.name} , age: ${this.age}, gender: ${this.male}`

    }
}

class Student {
    constructor(
        public name: string, 
        private age: number,
        readonly male: boolean
    ){}

    print() {
        return `${this.name} is ${this.age} and ${this.male}`
    }
}

const me = new Student('Trung', 22, true)
console.log(me)


const henry = new Employee('Henry', 30, true)
// console.log(henry.name)
// console.log(henry.age)


// henry.name = 'Trung'
// henry.age = 20
// console.log(henry)

// console.log(henry.print())

const bob = new Employee('bob', 25, true)

let employees: Employee[] = []
employees.push(henry)
employees.push(bob)

employees.forEach(employee => 
    console.log(employee.name, employee.male, employee.print()))