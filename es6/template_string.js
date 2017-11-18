const dogs = [
    {name: '小白', age: 2},
    {name: '小黑', age: 3},
    {name: '飞飞', age: 1},
];
// map 是一个函数  属于dogs  数组  具有map方法
// iterator
// map 返回的是一个数组 用 join 方法对字符串数组进行拼接
dogs.map(dog => 
     `
    <li>${dog.name} is ${dog.age} years old.</li>
    `
).join('');


// const name = 'Snickers';
// const age = 2;
// const dog = `My dog is ${name}, ${age}years old`;
// console.log(dog);
const beer = {
    name: 'Belgian Wit',
    brewery: 'Steam Whistle Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords (keywords) {
    return `
    <ul>
    ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    <ul>
    `;
};
const markup = `
    <div class="beer">
        <h2>${beer.name}</h2>
        <p class="brewery">${beer.brewery}</p>
        ${renderKeywords(beer.keywords)}
    </div>
`;
// 可声明的HTML标记  运行在JS中
document.body.innerHTML = markup;