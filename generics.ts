// Generics 

type myArr = Array<string>
type numArr = Array<number>


const last = (arr: Array<number>) => arr[arr.length - 1]

const l1 = last([1,4,5])
// console.log(l1)
// const l2 = last(['a','b'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const l3 = lastT([1,2,3])
const l4 = lastT(['a', 'b', 'c'])
const l5 = lastT<string>(['d', 'e'])

const makeArr = (x: number) =>[x]

const m = makeArr(5)
// console.log(m)
// const m2 = makeArr('a')

const makeArrT = <T>(x: T) => [x]

const m3 = makeArrT(5)

const makeArrXY = <X, Y>(x: X, y: Y) => [x,y]

const m4 = makeArrXY(4, 5)
const m5 = makeArrXY('a', 'b')
const m6 = makeArrXY('a', 5)

const makeTuple = <X, Y>(x: X, y: Y): [X,Y]=> [x, y]

const m7 = makeTuple('x',5)
const m8 = makeTuple('a', 'b')
const m9 = makeTuple<string, number>('Yeu', 5)
const m10 = makeTuple<string | null, number>(null, 3)

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
const m11 = makeTupleWithDefault<string | null>('yeu',3)


// Generics extend //

// const makeFullName = (obj) => ({
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`
// })

const makeFullNameConstraint = (obj: {firstName: string, lastName: string}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName: 'Henry',lastName: 'Web Dev'})

const makeFullNameWithGenerics = <T extends {firstName: string, lastName: string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameWithGenerics({firstName: 'Henry', lastName: 'Web Dev', age: 30})

const addNewEmployee = (employee: object) => {
    let uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const emp1 = addNewEmployee({name: 'Henry', age: 32})
// console.log(emp1)
// console.log(emp1.name)

const addNewEmployeeT = <T extends object>(employee: T) =>  {
    let uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const emp2 = addNewEmployeeT({name: 'Trung', age: 23, male: true})
// console.log(emp2)
// console.log(emp2.name)


const addNewEmployeeTWithExtend = <T extends {name: string}>(employee: T) =>  {
    let uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}
const emp3 = addNewEmployeeTWithExtend({name: 'Thuy Do?', age: 22})
console.log(emp3)


// GENERICS in INTERFACE // 

interface Resource<T>{
    uid: number,
    name: string, 
    data: T
}

type NumberResource = Resource<number[]>

const abcsd: NumberResource = {
    uid: 2,
    name: 'My Name',
    data: [1,3,4,5]
}

// type asdsd = Resource<object>

// const yeuEM: asdsd = {
//     uid: 1,
//     name: 'gau Truc',
//     data: {
//         age: 30,
//         address: 'Sai Gon'
//     }
// }


const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'Hello'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'Movie',
    data: {name: 'Avenger'}
}
const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'Developer',
    data: ['Css', 'Javascript', 'C++']
}




