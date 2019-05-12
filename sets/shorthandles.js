const Rgx = require("../Rgx")

const rgx = new Rgx(`1,2,3,4,5,6,a.b c!d?e\r    -
f_g`)

rgx.match(/\d/g) // Show just numbers [0-9] 
rgx.match(/\D/g) // Ignore numbers [^0-9]

rgx.match(/\w/g) // Show just characters, show all. [A-Za-z0-9_]
rgx.match(/\W/g) // Ignore all ccharacters and show all symbols and spaces [^A-Za-z0-9_]

rgx.match(/\s/g) // Show all spaces types [\r\t\n\s]
rgx.match(/\S/g) // Ignore all spaces types [^\r\t\n\s]