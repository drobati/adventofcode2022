
// To solve this puzzle, we first need to read in the input and parse it into a list of integers.

const fs = require('fs');
const path = require('path');

function splitFoodItemsIntoGroups(listOfFood) {
    const groups = [];
    let currentGroup = [];
    for (let i = 0; i < listOfFood.length; i++) {
        if (listOfFood[i] === '') {
            groups.push(currentGroup);
            currentGroup = [];
        } else {
            currentGroup.push(listOfFood[i]);
        }
    }
    return groups;
}


function sumOfCalories(groups) {
    const sumOfGroups = [];
    for (let i = 0; i < groups.length; i++) {
        let sum = 0;
        for (let j = 0; j < groups[i].length; j++) {
            sum += parseInt(groups[i][j]);
        }
        sumOfGroups.push(sum);
    }
    return sumOfGroups;
}

function largestSum(topN) {
    const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
    const listOfFood = input.split('\r\n')
    const groups = splitFoodItemsIntoGroups(listOfFood);
    const sums = sumOfCalories(groups);
    // return the top N sums summed together
    return sums.sort((a, b) => b - a).slice(0, topN).reduce((a, b) => a + b);
}

module.exports = largestSum;
