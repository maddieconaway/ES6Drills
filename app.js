document.addEventListener('DOMContentLoaded', function () {
    let favMovie = (name = 'world', movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

    let getFirstName = (name) => {
        const words = name.split(' ');
        console.log('getFirstName= ' + words[0]);
    }

    let getFirstNameConcise = (name) => console.log(`getFirstNameConcise= ${name.split(' ')[0]}`);

    let getStats = (a, b) => ({
        exponent: Math.pow(a, b),
        product: a * b
    });

    let logFavFood = (name, location, favFood) => {
        console.log(`name: ${name} location: ${location} favorite food: ${favFood}`);
    }

    favMovie('Maddie', 'Gravity');
    getFirstName('Danni Gespacho');
    getFirstNameConcise('Maddie Conaway');
    console.log(`exponent: ${getStats(3, 2).exponent} product: ${getStats(3, 2).product}`);
    let arr = ['Maddie', 'Bay Leaf Restaurant', 'Curry Chicken'];

    logFavFood(...arr);

    let myName = 'Maddie Conaway';

    let myFunc = nameString => {
        nameArr = [...nameString];
        for (i = 0; i < nameArr.length; i++) {
            console.log(`item[${i}]: ${nameArr[i]}`);
        }
    }

    myFunc(myName);
});

