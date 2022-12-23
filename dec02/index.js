import { getInput } from "../main.js";

const puzzleInput = getInput(import.meta.url);

// Organise the puzzle input into rounds
const rounds = puzzleInput.trim().split("\n").map(round=>{
    return round.split(" ");
});

const getTotalScore = (rounds) => {
    let total = 0;
    rounds.map(round => {
        let gameScore = 0;
        /*  
            OPPONENT:
            A = rock       
            B = paper      
            C = scissors    
        
            ME:
            X = rock        => 1
            Y = paper       => 2
            Z = scissors    => 3

            lose            => 0
            draw            => 3
            win             => 6
        */
        if(round[0] === "A" && round[1] === "X") gameScore = 4 // draw (3 pt) + rock (1 pt)
        if(round[0] === "A" && round[1] === "Y") gameScore = 8 // win (6 pt) + paper (2 pt)
        if(round[0] === "A" && round[1] === "Z") gameScore = 3 // lose (0 pt) + scissors (3 pt)
        if(round[0] === "B" && round[1] === "X") gameScore = 1 // lose (0 pt) + rock (1 pt)
        if(round[0] === "B" && round[1] === "Y") gameScore = 5 // draw (3 pt) + paper (2 pt)
        if(round[0] === "B" && round[1] === "Z") gameScore = 9 // win (6 pt) + scissors (3 pt)
        if(round[0] === "C" && round[1] === "X") gameScore = 7 // win (6 pt) + rock (1 pt)
        if(round[0] === "C" && round[1] === "Y") gameScore = 2 // lose (0 pt) + paper (2 pt)
        if(round[0] === "C" && round[1] === "Z") gameScore = 6 // draw (3 pt) + scissors (3 pt)    
        total = total + gameScore;  
    });
    return total;
};

const answer = getTotalScore(rounds);

console.log(`
    What would your total score be if everything goes exactly according to your strategy guide? 
    ${answer}
    `);
