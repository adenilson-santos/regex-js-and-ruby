const text = "0,1,2,3,4,5,6,a.b c!d?e"

// Retira os caracteres especiais abaixo deixando apenas numeros e letras
const regexMeta = /,|\.|!|\?| /g

console.log(text.split(regexMeta).join(' '))