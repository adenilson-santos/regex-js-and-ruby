const text = `
ca	r
r	o s!
`

const regexBlank = /ca\tr\nr\to\ss!/g

const result = text.match(regexBlank)

console.log(result)