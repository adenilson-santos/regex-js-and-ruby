module Utils

    class Rgx
        def initialize (text = "Texto")
            @text = text
        end

        def match(regex = /x/) 
            puts @text.scan(regex)
            puts "--------------------------"
        end
    end

end