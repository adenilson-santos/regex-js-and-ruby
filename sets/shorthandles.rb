require "../Rgx"

rgx = Utils::Rgx.new('1,2,3,4,5,6,a.b c!d?e\r		-
    f_g')

rgx.match(/\d/) # Show just numbers [0-9] 
rgx.match(/\D/) # Ignore numbers [^0-9]

rgx.match(/\w/) # Show just characters, show all. [A-Za-z0-9_]
rgx.match(/\W/) # Ignore all ccharacters and show all symbols and spaces [^A-Za-z0-9_]

rgx.match(/\s/) # Show all spaces types [\r\t\n\s]
rgx.match(/\S/) # Ignore all spaces types [^\r\t\n\s]


