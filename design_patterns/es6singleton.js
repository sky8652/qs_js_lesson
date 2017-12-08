class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');

console.log(a === b);

console.log(Singleton.instance);
console.log(a.name + "+" + b.name);