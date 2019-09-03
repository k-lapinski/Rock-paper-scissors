const gResults = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    player: '',
    ai: '',
}

const aiChoice = () => {
    return choice[Math.floor(Math.random() * 3)].dataset.option;
}

const choice = [...document.querySelectorAll('.images div')];

const select = (e) => {
    game.player = e.currentTarget.dataset.option;
    console.log(game.player);
}

const checkResult = (p, ai) => {
    if (p === ai) {
        return 'draw';
    }
    else if ((p === 'paper' && ai === 'rock') || (p === 'rock' && ai === 'scissors') || (p === 'scissors' && ai === 'paper')) {
        return 'you';
    }
    else {
        return 'opponent';
    }
}

const viewResult = (p, ai, result) => {
    document.querySelector('.yChoice').textContent = 'Your choice:' + p;
    document.querySelector('.oChoice').textContent = "Opponent's choice:" + ai;
    document.querySelector('.winner').textContent = 'The winner is:' + result;
    document.querySelector('.game').textContent = 'Games:' + ++gResults.numbers;
    if (result === 'draw') {
        document.querySelector('.draw').textContent = 'Draw:' + ++gResults.draws;
    }
    else if (result === 'you') {
        document.querySelector('.win').textContent = 'Win:' + ++gResults.wins;
    }
    else if (result === 'opponent') {
        document.querySelector('.lose').textContent = 'Lose:' + ++gResults.losses;
    }
}

const startGame = () => {
    if (!game.player) return alert('select an option');
    game.ai = aiChoice();
    const gameResult = checkResult(game.player, game.ai);
    console.log(gameResult);
    viewResult(game.player, game.ai, gameResult);
}

choice.forEach(div => div.addEventListener('click', select));

document.querySelector('.play').addEventListener('click', startGame);