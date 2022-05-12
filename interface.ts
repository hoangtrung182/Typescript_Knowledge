// Interface //

interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const henry: Person = {
    name: 'Henry',
    age: 24,
    speak(text: string) {
        console.log(text)
    },
    spend(amt: number): number{
        return amt
    }
}

// console.log(henry)

const helloPerson = (onePer: Person) => console.log(`Hello ${onePer.name}`)
helloPerson(henry)
