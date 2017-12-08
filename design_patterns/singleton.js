// function Xiaocai(name, haircut) {
//     this.name = name;
//     this.haircut = haircut;
// }
// Xiaocai.prototype.hobbies = function() {
//     console.log('不管怎样，你开心就好');
// }
// var xc = new Xiaocai('小菜', '飞刘海');
// var xc2 = new Xiaocai('小菜', '爆炸头');
// xc.hobbies();
// xc2.hobbies();


// 如何在多次new的时候  只得到一个对象 ———— 单例模式
// class new  创建一个对象
// new 是拷贝式赋值
var Singleton = function(name) {
    this.name = name;
    // instanceof 实例
    this.instance = null;
}
// 提供了一个static方法，不需要new，可以在类上调用
// 废掉 constructor 也就是 new
// 没有 prototype 就是静态方法
Singleton.getInstance = function(name) {
    // 没有实例化的时候
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    // 已经实例化了后
    // 保证实例化只会执行一次
    return this.instance;
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// 要达到的目标：a === b  引用式赋值

// 指向的是唯一实例化的对象
console.log(a === b);

console.log(Singleton.instance);
console.log(a.name + "+" + b.name);