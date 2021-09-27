const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 21
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//Tuple
const contact: [string, number] = ['Andrey', 555555555]

//Any
let variable: any = 42
//...
variable = 'New String'
variable = []

//===
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Heisenberg')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//Type
type Login = string

const login: Login = 'admin'
