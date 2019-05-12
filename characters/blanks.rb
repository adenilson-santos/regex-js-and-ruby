text = <<EOM
ca	r
r	o s!
EOM

regexBlank = /ca\tr\nr\to\ss!/

result = text.scan(regexBlank)

puts result 