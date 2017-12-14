const add = (a,b) => { 
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    // 容错性
    // throw new Error('一定是要数字相加');
    return NaN;
};

// console.log(isNaN(add('分分','主席')));

module.exports = { add } 