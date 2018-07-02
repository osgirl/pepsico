var x = 3;
function func(randomize) {
  var x; //hoisting
  if (randomize) {
    x = Math.random();
    return x;
  }
  return x;
}

func(false);
