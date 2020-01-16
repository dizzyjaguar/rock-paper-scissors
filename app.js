import { getRandomThrow, checkResult } from './get-random-throw.js'; 

const winsShow = document.getElementById('wins-span');
const lossesShow = document.getElementById('losses-span');
const drawsShow = document.getElementById('draws-span');
const userChoice = document.getElementById('user-choice');
const npcChoice = document.getElementById('npc-choice');
const results = document.getElementById('results');
const battleButton = document.getElementById('battle-button');

let wins = 0;
let losses = 0;
let draws = 0;

battleButton.addEventListener('click', () =>{
    const humanInput = document.querySelector('input:checked');
    const humanChoice = humanInput.value;
    const npcChose = getRandomThrow();
    const result = checkResult(humanChoice, npcChose);
    console.log('user', humanChoice);
    console.log('comp', npcChose);
    console.log('result', result);
    
    userChoice.textContent = humanChoice;
    npcChoice.textContent = npcChose;


    if (result === 'win') {
        wins++;
        winsShow.textContent = wins;
        results.textContent = 'Nice one! You won this battle!';
    } else if (result === 'lose') {
        losses++;
        lossesShow.textContent = losses;
        results.textContent = 'Ah damn! NPC Knight got ya, you lost this one';
    } else {
        draws++;
        drawsShow.textContent = draws;
        results.textContent = 'You were equally matched';
    }
});

