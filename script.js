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

const startGame = () => {
    if (!game.player) return alert('select an option');
    game.ai = aiChoice();
}

choice.forEach(div => div.addEventListener('click', select));

document.querySelector('.play').addEventListener('click', startGame);