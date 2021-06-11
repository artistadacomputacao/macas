let player = {
x: 0,
y: 4,
pontos: 0,
game: game.createSprite(0, 0),
brilho: 10,
velocidade: 1,
};
let maca = {
x: randint(0, 4),
y: -1,
velocidade: 0.03,
brilho: 0,
game: game.createSprite(0, 0),
};
function addmaca() {
maca.game.delete();
maca.game = game.createSprite(0, 0);
maca.brilho = 20;
}
function setup() {
/*setup do player*/
player.game.setBrightness(player.brilho);
player.game.setX(player.x);
player.game.setY(player.y);
game.setScore(player.pontos);
/*setup da maçã*/
maca.game.setBrightness(maca.brilho);
maca.game.setX(maca.x);
maca.game.setY(maca.y);
}
function inputs() {
input.onButtonPressed(Button.A, () => {
  player.x -= player.velocidade;
});
input.onButtonPressed(Button.B, () => {
  player.x += player.velocidade;
});
}
function debug() {
if (player.x > 4) {
  player.x = 4;
} else if (player.x < 0) {
  player.x = 0;
}
if (Math.round(maca.y) == 4 && maca.x == player.x) {
  player.pontos++;
  player.brilho += 20;
  maca.y = randint(-1, -5);
  maca.brilho = 0;
  maca.x = randint(0, 4);
  addmaca();
}
if (Math.round(maca.y) == 5) {
  game.gameOver();
}
if (maca.y > 0) {
  maca.brilho = 20;
} else {
  maca.brilho = 0;
}
}
function frame() {
maca.y += maca.velocidade;
}
basic.forever(() => {
debug();
setup();
inputs();
frame();
});
 
