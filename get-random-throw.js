export {getRandomThrow, getThrowFromNumber, checkResult};

const getRandomThrow = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return getThrowFromNumber(randomNumber);

    console.log(randomNumber);
}

const getThrowFromNumber = (number) => {
    if(number === 0) return 'rock';
    if(number === 1) return 'paper';
    if(number === 2) return 'scissors';
}

const checkResult = (human, npc) => {
    if (human === npc) return 'draw';

    if (human === 'rock' && npc === 'scissors') return 'win';
    else if (human 'paper' && npc === 'rock') return 'win';
    else if (human 'scissors' && npc === 'paper') return 'win';
    else return 'lose';
}

