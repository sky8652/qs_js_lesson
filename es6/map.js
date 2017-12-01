// 如何手动实现 Array.prototype.map 
var originArr = [1, 2, 3, 4, 5];
// var newArr = originArr.map(item => {
//     return item*3;
// })
// console.log(newArr);

// 手动实现 es6 -> es5 手写
// 闭包 高阶函数 作用域

// step1：流程化代码
// var newArr = [];
// for(var i = 0 ; len = originArr.length, i < len; i++) {
//     newArr.push(originArr[i] * 3);
// }
// console.log(newArr);


// 远离  顺序流程化，具象解决问题


// step2 封装函数  将一个数组每一项都*3，并且返回一个新的数组
// function multiplyByThree(arr) {
//     var newArr = [];
//     for(var i = 0 ; len = arr.length, i < len; i++) {
//         newArr.push(arr[i] * 3);
//     }
//     return newArr;
// }
// console.log(multiplyByThree(originArr));


// step3 将具象的东西拿掉
// 解耦乘号   如何*5    传入字符串数组，如何让小写变成大写
// function timesThree(item) {
//     return item * 3;
// }
// function makeUpperrCase(item) {
//     return item.toUpperCase;
// }
// 函数解释一个函数怎么处理
// 高阶函数：函数作为参数或者作为返回值
// map 才成为了真正的 map 能遍历一个数组，做任意的事情
// function map(arr, fn) {
//     // 函数的内部  分成几个函数  每个函数只做一件事
//     var newArr = [];
//     for(var i = 0 ; len = arr.length, i < len; i++) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }
// console.log(map(originArr, timesThree));


Array.prototype.map = function(fn) {
    var newArr = [];
    // 函数执行的时候  this  会指向对象本身
    // console.log(this);
    for(var i = 0; i < this.length; i++) {
        // 为了方便操作 可以传入下标i 和数组本身
        newArr.push(fn(this[i], i, this));
    }
    return newArr;
}
var newArr = originArr.map(function(item, item, arr) {
    return item * item;
})
console.log(newArr);