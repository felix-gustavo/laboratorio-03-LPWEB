class Student {
  constructor (name, firstGrade, secondGrade, frequency, finalTest, avg, status) {
      this.name = name;
      this.firstGrade = firstGrade;
      this.secondGrade = secondGrade;
      this.frequency = frequency;
      this.finalTest = finalTest;
      this.avg = avg;
      this.status = status;
  }

  // name
  get name () {
    return this.name;
  }
  set name (name) {
    this.name = name;
  }

  // firstGrade
  get firstGrade () {
    return this.firstGrade;
  }
  set firstGrade (firstGrade) {
    this.firstGrade = firstGrade;
  }

  // secondGrade
  get secondGrade () {
    return this.secondGrade;
  }
  set secondGrade (secondGrade) {
    this.secondGrade = secondGrade;
  }

  // frequency
  get frequency () {
    return this.frequency;
  }

  set frequency (frequency) {
    this.frequency = frequency;
  }

  // finalTest
  get finalTest () {
    return this.finalTest;
  }
  set finalTest (finalTest) {
    this.finalTest = finalTest;
  }
  
  // avg
  get avg () {
    return this.avg;
  }
  set avg (avg) {
    this.avg = avg;
  }

  // status
  get status () {
    return this.status;
  }
  set status (status) {
    this.status = status;
  }
}