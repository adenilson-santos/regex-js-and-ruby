text = "Arquivos mp3: rock.mp3, jazz.mp3, forro.mp3, tango.mp3"

regexMp3 = /\.mp3/

result = text.scan(regexMp3).length

puts result