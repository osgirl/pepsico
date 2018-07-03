// function* generateNumbers() {
//   console.log(1);
//   console.log(2);
//   yield "pause1";
//   console.log(3);
//   console.log(4);
//   yield "pause2";
//   console.log(5);
// }

function step1() {
  return new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
    console.log(3);
    resolve();
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(4);
      console.log(5);
      console.log(6);
      resolve();
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(7);
      console.log(8);
      resolve();
    }, 500);
  });
}

function* doWork() {
  try {
    yield step1();
    yield step2();
    yield step3();
  } catch (err) {}
}

//var it = doWork();
//it.next().value.then(() => it.next().value.then(() => it.next()));

async function doWork() {
  try {
    console.log("s1");
    await step1();
    console.log("s2");
    await step2();
    console.log("s3");
    await step3();
    console.log("s4");
  } catch (err) {}
}
