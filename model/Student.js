class Student {
  constructor (name, firstGrade, secondGrade, frequency, finalTest, avg, status) {
      this._name = name;
      this._firstGrade = firstGrade;
      this._secondGrade = secondGrade;
      this._frequency = frequency;
      this._finalTest = finalTest;
      this._avg = avg;
      this._status = status;
  }

  // name
  get name () {
    return this._name;
  }
  set name (name) {
    this._name = name;
  }

  // firstGrade
  get firstGrade () {
    return this._firstGrade;
  }
  set firstGrade (firstGrade) {
    this._firstGrade = firstGrade;
  }

  // secondGrade
  get secondGrade () {
    return this._secondGrade;
  }
  set secondGrade (secondGrade) {
    this._secondGrade = secondGrade;
  }

  // frequency
  get frequency () {
    return this._frequency;
  }

  set frequency (frequency) {
    this._frequency = frequency;
  }

  // finalTest
  get finalTest () {
    return this._finalTest;
  }
  set finalTest (finalTest) {
    this._finalTest = finalTest;
  }
  
  // avg
  get avg () {
    return this._avg;
  }
  set avg (avg) {
    this._avg = avg;
  }

  // status
  get status () {
    return this._status;
  }
  set status (status) {
    this._status = status;
  }
}