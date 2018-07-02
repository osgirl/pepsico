class Person {
  constructor(age) {
    this.age = age;
  }
  describe() {
    console.log("Person Age is " + this.age);
  }
}

class Student extends Person {
  constructor(age, grade) {
    super(age);
    this.grade = grade;
  }
}
