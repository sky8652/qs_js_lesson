// 类似继承 function Person new
// 继承
// 人类 object
var Person = {
    name: 'default name',
    getName: function() {
        return this.name;
    }
}

// 原型式继承
// Person object 构建  js没有类，只有原型对象  所有的子类都指向父类，进行继承
// 父类有的属性和方法，子类都有
function clone(obj) {
    // 闭包
    // 构造函数F
    function F() {}
    // 原型链指向另外一个对象obj(原型链对象)，奉献精神，让基于它的对象来它的链上找它的方法和属性
    // js里面 只要将原型链指向另一个对象，就构成了继承
    // 顶端是object
    // F将prototype交给obj  F就有了obj的所有方法和属性
    F.prototype = obj;
    // 所有F的实例  都有F的属性和方法
    return new F();
}

// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

var ltt = clone(Person);
console.log(ltt);
ltt.name = 'ltt';
console.log(ltt.getName());

var Author = clone(Person);
// Author 已经将 prototype 指向了Person  已经不是一个类了，就是一个对象
Author.books = [];
Author.getBooks = function() {
    return this.books.join(",");
}
// console.log(Author.getBooks());

// 实例化  创建了一个对象
var ft = clone(Author);
ft.name = "冯唐";
ft.books = ["十八岁给我一个姑娘", "北京北京"];
console.log(ft.getBooks());
console.log(ft.getName());

// js 实现 私有变量， 静态方法 闭包