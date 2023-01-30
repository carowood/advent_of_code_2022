import { getInput } from "../main.js";

const puzzleInput = getInput(import.meta.url);

// Organise the puzzle input into rounds
const rounds = puzzleInput.trim().split("\n").map(round=>{
    return round.split(" ");
});

const getTotalScorePart1 = (rounds) => {
    /*  
            OPPONENT:
            A = rock       
            B = paper      
            C = scissors    
        
            MY SHAPE VALUES:
            X = rock        => 1
            Y = paper       => 2
            Z = scissors    => 3

            ROUND SCORES:
            lose            => 0
            draw            => 3
            win             => 6
        */

    let total = 0;

    const roundScores = {
        A: { X: 3, Y: 6, Z: 0 },
        B: { X: 0, Y: 3, Z: 6 },
        C: { X: 6, Y: 0, Z: 3 },
    };
    
    const myShapeValues = { X: 1, Y: 2, Z: 3 };
    
    for (const [a, b] of rounds) {
        total += roundScores[a][b] + myShapeValues[b];
    };

    return total;
};

const getTotalScorePart2 = (rounds) => {
    let total = 0;
   
    const shapeValues = {
        A: { X: 3, Y: 1, Z: 2 },
        B: { X: 1, Y: 2, Z: 3 },
        C: { X: 2, Y: 3, Z: 1 }
    };

    const roundScores = { X: 0, Y: 3, Z: 6 };
    
    for (const [a, b] of rounds) {
        total += roundScores[b] + shapeValues[a][b]
    }

    return total;
};

const answer1 = getTotalScorePart1(rounds);  
const answer2 = getTotalScorePart2(rounds);

console.log(`
    What would your total score be if everything goes exactly according to your strategy guide? 
    ${answer1}
    `);
console.log(`
    Following the Elf's instructions for the second column, what would your total score be if 
    everything goes exactly according to your strategy guide? 
    ${answer2}
`);
