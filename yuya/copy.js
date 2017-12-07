// const arr = [1, 2, 3];
// Array.prototype.concat 会返回一个新的数组
// concat() 将多个数组合并为一个数组，不传值的时候，就是一个数组，将arr交给arr2
// const arr2 = arr.concat();
// arr[1] = 4;
// console.log(arr2);
// arr2[0] = 6;
// console.log(arr2);
// console.log(arr);

// var arr = ['old', 1, true, null, undefined];
// var new_arr = arr.concat();
// new_arr[0] = 'new';
// console.log(arr);
// console.log(new_arr);


var arr = new Array(6);
// console.log(arr.length);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";
// slice(2) 是对数组的切割，从下标为2的地方开始切割，2之前的数值不要，返回一个新的数组。还能倒序取数值等等。
// 不给参数和给0一样，就是0之前的数值不要，也就是没有舍去任何一个值，而得到了新的数组
const newArr = arr.slice();
newArr[0] = "before";
console.log(newArr);
console.log(arr.slice(2, 4));
console.log(arr);
// 负数表示 反向按照索引取值
console.log(arr.slice(-4, -1));
// 借用数组 concat合并 slice切割  返回新数组的方式，来实现浅拷贝
// 这两个方法处理后的数组，不会影响原来数组的值，只会返回新数组
// js 处理数组的方法  删除数组中的项目，并且还能添加
// 第一个参数 index，第二个下标 切割的个数。切去的部分就是舍去不要的部分。  直接在原来的数组上进行操作！！
arr.splice(0, 2);
console.log(arr);
// slice 方法还能插入元素
arr.splice(2, 0, "insert");
console.log(arr);
// 数组方法有两派，改变原数组与否