var game = {
  number: new Decimal(10),
  mult: {
    amount:[1337, new Decimal(1), new Decimal(1)],
    cost:[420, new Decimal(10), new Decimal(100)],
    unlocked:[69, false, false]
  },
};
setInterval(function() {
  game.number = game.number.mul(game.mult.amount[1]);
  updateStuff();
}, 1000);
function updateStuff() {
  document.getElementById("number").innerHTML = game.number;
  document.getElementById("mult1").innerHTML = game.mult.amount[1];
  document.getElementById("multCost1").innerHTML = game.mult.cost[1];
}
function buyMult(n) {
  if (game.number >= game.mult.cost[n]) {
    if (game.mult.unlocked[n] == false) {
      game.mult.amount[n] = game.mult.amount[n].mul(1.25);
      game.mult.unlocked[n] = true;
    } else {
      game.number = game.number.div(game.mult.cost[n]);
      game.mult.amount[n] = game.mult.amount[n].pow(2);
    }
  }
  updateStuff();
}
function findDisplayValue(n) {
  if (n < 1000) {
    return n.mag;
  } else if (n < 1e100) {
    return "e" + n.e;
  } else {
    return "E" + n.e + "#" + n.layer;
  }
}
