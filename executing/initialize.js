const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

const regexNine = RegExp('9')
console.log("Métodos de Regex...")
console.log(regexNine.test(text))
console.log(regexNine.exec(text))

const regexLetters = /[a-f]/g
console.log("Métodos de String...")
console.log(text.search(regexLetters))
console.log(text.match(regexLetters))
console.log(text.replace(regexLetters, 'null'))
console.log(text.match(regexLetters))