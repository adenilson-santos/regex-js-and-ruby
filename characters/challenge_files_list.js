const text = "Arquivos mp3: rock.mp3, jazz.mp3, forro.mp3, tango.mp3"

const regexMp3 = /\.mp3/g

const result = text.match(regexMp3).length

console.log(result)