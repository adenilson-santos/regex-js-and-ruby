text = 'Casa bonita é a casa amarela da esquina com a rua ACASALAR.'

regex = /casa/i

puts text =~ regex
puts regex =~ text

puts text.match(regex)
puts text.scan(regex).join(" ")