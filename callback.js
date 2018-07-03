// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(function() {
//   console.log(4);
//   console.log(5);
//   console.log(6);
//   setTimeout(function() {
//     console.log(7);
//     console.log(8);
//     setTimeout(function() {
//       console.log(9);
//       console.log(10);
//     }, 1000);
//   }, 1000);
// }, 1000);

function step1(next) {
  console.log(1);
  console.log(2);
  console.log(3);
  next(step3);
}

function step2(next) {
  setTimeout(function() {
    console.log(4);
    console.log(5);
    console.log(6);
    next(step4);
  }, 2000);
}

function step3(next) {
  setTimeout(function() {
    console.log(7);
    console.log(8);
    next();
  }, 500);
}

function step4() {
  setTimeout(function() {
    console.log(9);
    console.log(10);
  }, 1200);
}

function doWork() {
  step1(step2);
}

doWork();
