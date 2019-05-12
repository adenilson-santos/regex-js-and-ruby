class Rgx {

    constructor(text = "texto"){
        this.text = text
    }

    match (regex = /x/) {
        console.log(this.text.match(regex))
    }

    replace (regex = /x/, another) {
        console.log(this.text.replace(regex, another))
    }

}

module.exports = Rgx