const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,G,h,[,?,-,.,!"

console.log(text.match(/[a-z0-9]/gi))
// Conhete is showed because is between A-z on unicode table.
console.log(text.match(/[A-z]/gi))