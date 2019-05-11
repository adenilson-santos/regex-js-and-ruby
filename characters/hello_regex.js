const text = 'Casa bonita é a casa amarela da esquina com a rua ACASALAR.'

const regex = /casa/gi

console.log(text.match(regex))
console.log(text.match(/a b/))
console.log(regex.test(text))
console.log(regex.exec(text))