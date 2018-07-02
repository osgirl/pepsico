// const makeName = function(first, last, salute = "Mr") {
//   return `${salute}. ${first},${last}`;
// };

// makeName("bala", "krishna", "Mrs");
// const makeName = (first, last, salute = "Mr") => `${salute}. ${first},${last}`;
// makeName("bala", "krishna", "Mrs");

function Person(age) {
  this.age = age;
  this.describre = () => {
    console.log(`Age of person is ${this.age}`);
  };
}
