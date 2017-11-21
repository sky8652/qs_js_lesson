// 继承
// subClass 子类  superClass父类
function extend(subClass, superClass) {
    // 手术  子类拥有父类的所有方法  继承最重要的是propotype
    // prototype指向
    // 类F 函数就是对象，就是类
    var F = function() {}
    // 将父类所有的方法都给F，F是一个类
    F.prototype = superClass.prototype;
    console.log(F);
    console.log(F.prototype);
    // js 原型链 prototype  对象会沿着原型链一直去查找
    // 自身对象是否有getName方法 ， 如果没有，就会沿着这根链找其他的对象，是否有方法
    // console.log(subClass.prototype.constructor);
    // F 作为 subClass 原型链上的一个原型链对象  在 subClass 进行查找时，会查找自己原型链上对象 的 原型链
    // F 处于 subClass 的原型链上  就叫原型对象
    subClass.prototype = new F();
    // console.log(subClass.prototype.constructor);
    // 构造函数 subClass
    // constructor 属性  对象完全是由 prototype 指挥的
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.constructor);
    // 静态属性
    // subclass 能够得到父类的原型链
    subClass.subclass = superClass.prototype;
}

// 人类
// Person 既是函数， 也是构造函数
// 函数是对象的一种，即可执行的对象
// 函数是一等对象  上天入地
// 函数可以作为表达式  var a = function() {}
// 高阶函数  作为形参来用 function func(cb) { cb();}
// 返回值

// 基类
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

// var ltt = new Person("李婷婷");
// console.log(ltt.getName());
// 子类
function Author(name, books) {
    // 借
    // Author 类中得到所有属性的设置
    // this -> author 对象指向
    // 第一个参数是表示Person对象this的指向   第二个参数是该函数的参数
    // 就是说 这么做 person 就要为author干活了
    Person.call(this, name);
    this.books = books;
}

// Author.prototype.getName = function() {
//     return Person.prototype.getName.call(this);
// }
// Person prototype 方法  子类都得有
// Person 的构造函数不能被改掉
extend(Author, Person);

Author.prototype.getBooks = function() {
    return this.books.join("，");
}

var ltt = new Author("李婷婷",["我知道的JS", "JS红学", "设计模式"]);
console.log(ltt.getName());
console.log(ltt.getBooks());