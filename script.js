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
        return 'win';
    }
    else {
        return 'lose';
    }
}

const startGame = () => {
    if (!game.player) return alert('select an option');
    game.ai = aiChoice();
    const gameResult = checkResult(game.player, game.ai);
    console.log(gameResult);
}

choice.forEach(div => div.addEventListener('click', select));

document.querySelector('.play').addEventListener('click', startGame);