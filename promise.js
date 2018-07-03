let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "success" });
  }, 5000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject({ error: "failed" });
  }, 5000);
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ succces: "done" });
  }, 5000);
});

p1.then(function(data) {
  console.log(data);
  return p2;
})
  .then(function(data) {
    console.log(data);
    return p3;
  })
  .catch(function(err) {
    console.log(err);
  });

///

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

function doWork() {
  step1()
    .then(step2)
    .then(step3)
    .catch(err => console.log(err));
}

doWork();
////

//all

let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "p1" });
  }, 500);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject({ message: "p2" });
  }, 1000);
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "p3" });
  }, 100);
});

Promise.race([p1, p2, p3]).then(function(result) {
  console.log(result);
});

Promise.all([p1, p2, p3]).then(function(results) {
  console.log(results);
});
