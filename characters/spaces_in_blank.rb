text = 'a   b'
#option 1
puts text.match(/a   b/)
puts text.match(/a\s\s\sb/)

#option 2
puts text.match(/a {3}b/)
puts text.match(/a\s{3}b/)

#option 3
puts text.match(/a +b/)
puts text.match(/a\s+b/)