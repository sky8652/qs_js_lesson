'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 小吃店 pizza
// 常量 es6 先考虑const  let
// var 基本不用    let 更加安全
// const 声明的变量  类型不能变，除了基本类型外，值是可变的
// constant variable 
// const name = "ltt";
// name = "Tean";
// console.log(name);
var featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// 类型不能改变，不能由字符串转化成对象
// featured = {'haha':'123'};
// console.log(featured);

var specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];

// const pizzas = featured.push(...specialty);
// ...代表展开字符串， 能把两个字符串进行展开 排列
var pizzas = [].concat(featured, ['vegetable'], specialty);
console.log(pizzas);

var fridayPizzas = [].concat(_toConsumableArray(pizzas));
