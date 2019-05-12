const text = 'a   b'

// option 1
console.log(text.match(/a   b/))
console.log(text.match(/a\s\s\sb/))

// option 2
console.log(text.match(/a {3}b/))
console.log(text.match(/a\s{3}b/))

// option 3
console.log(text.match(/a +b/))
console.log(text.match(/a\s+b/))