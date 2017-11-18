'use strict';

var dogs = [{ name: '小白', age: 2 }, { name: '小黑', age: 3 }, { name: '飞飞', age: 1 }];
// map 是一个函数  属于dogs  数组  具有map方法
// iterator
// map 返回的是一个数组 用 join 方法对字符串数组进行拼接
dogs.map(function (dog) {
    return '\n    <li>' + dog.name + ' is ' + dog.age + ' years old.</li>\n    ';
}).join('');

// const name = 'Snickers';
// const age = 2;
// const dog = `My dog is ${name}, ${age}years old`;
// console.log(dog);
var beer = {
    name: 'Belgian Wit',
    brewery: 'Steam Whistle Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
    return '\n    <ul>\n    ' + keywords.map(function (keyword) {
        return '<li>' + keyword + '</li>';
    }).join('') + '\n    <ul>\n    ';
};
var markup = '\n    <div class="beer">\n        <h2>' + beer.name + '</h2>\n        <p class="brewery">' + beer.brewery + '</p>\n        ' + renderKeywords(beer.keywords) + '\n    </div>\n';
// 可声明的HTML标记  运行在JS中
document.body.innerHTML = markup;
