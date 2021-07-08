let char = "Peeley"

const other = "Jonsey"

let names = [char, other, "Midas", "Sloan", "Brutus"]

let mixedArray = []

let best = {
    name: 'Sky', 
    mythic: 'AR', 
    glider: 'Ollie'
}

let age = 5

let killer = false


console.log(char, other)

const inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach(input => {
    console.log(input)
}
    )

char = 'yeet'

age = 23

let circum = (diamater: number) => {
    return diamater * Math.PI
}

console.log(circum(age))

let a = names.push('Meowsucles')

console.log(a)

let greet: Function

greet = () => {
    console.log('Yo, What is good?')
} 

const add = (a: number, b: number, c/*?*/: number | string = 23): void => {
    console.log(a + b)
    console.log(c)
  }
  
  add(5, 10, 'homie')
  
  const minus = (a: number, b: number): number => {
    return a + b
  }
  
  let result = minus(10,7)
  console.log(result)

  //explicit types 
  let cha: string
  let time: number
  let isLoggedIn: boolean

  age = 34
  isLoggedIn = false 

  //arrays

  let peeps: string[] = []

  //union types

  let mixed: (string|number)[] = []


  //objects