text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,G,h,[,?,-,.,!"

puts text.scan(/[a-z0-9]/i)
# Conhete is showed because is between A-z on unicode table.
puts text.scan(/[A-z]/i)