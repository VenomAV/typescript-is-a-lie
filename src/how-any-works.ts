const anyValue: any = 10

const tail = (value: string): string => value.substring(1)

console.log("Tail of 'Ciao'", tail("Ciao"))
console.log("Tail of 10", tail(anyValue))
