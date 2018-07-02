function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sum1(mode, ...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

sum1(0, 12, 23, 455, 33);
