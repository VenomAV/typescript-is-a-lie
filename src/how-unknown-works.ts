const unknownValue: unknown = 10

const head = (value: string): string => value.substring(0, 1)

console.log("Tail of 'Ciao'", head("Ciao"))
// @ts-ignore
console.log("Tail of 10", head(unknownValue))
