var partnumber = 10255,
  description = "Assembly Square";
var legoset = {
  partnumber,
  description,
  [description]: partnumber,
  buildset() {
    return "Building set number " + this.partnumber + ", " + this.description;
  }
};
console.log(legoset);
