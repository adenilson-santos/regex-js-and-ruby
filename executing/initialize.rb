text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

regexNine = Regexp.new "9"
puts text.match(regexNine)

regexNine = %r{9}
puts text.match(regexNine)
puts text =~ regexNine

regexLetters = /[a-f]/
puts text.scan(regexLetters).join

puts text.split(",").join
puts text.split(regexLetters).join
puts text.split(/[aeiou]/).join