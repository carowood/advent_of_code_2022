import { getInput } from "../main.js";

const puzzleInput = getInput(import.meta.url);

function getTotalCaloriesByElf(input) {
    return input
            .split("\n\n")
            .map((elf)=> elf.split("\n").map(Number).reduce((a, b) => a + b, 0));
}

function getMostCalories(input) {
    return getTotalCaloriesByElf(input).sort().reverse()[1];
}

function getTotalTopThreeCalories(input) {
    const top3 = getTotalCaloriesByElf(input).sort((a,b) => b - a).slice(0, 3);
    return top3.reduce((a, b) => a + b, 0);
}

const answerOne = getMostCalories(puzzleInput);
const answerTwo = getTotalTopThreeCalories(puzzleInput);

console.log(`
    #1 Find the Elf carrying the most Calories. How many total Calories is that Elf carrying? 
    ${answerOne}
    `);

console.log(`
    #Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total? 
    ${answerTwo}
    `);

