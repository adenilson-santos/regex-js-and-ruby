text = "0,1,2,3,4,5,6,a.b c!d?e"

# Retira os caracteres especiais abaixo deixando apenas numeros e letras
regexMeta = /,|\.|!|\?/

puts text.split(regexMeta).join " "