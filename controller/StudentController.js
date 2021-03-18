class StudentController {
  constructor() {
    let $ = document.querySelector.bind(document);
    
    this._name = $('#name');
    this._firstGrade = $('#firstGrade');
    this._secondGrade = $('#secondGrade');
    this._frequency = $('#frequency');
    this._finalTest = $('#finalTest');

    this._finalTestDiv = $('#finalTest-div');

    this._students = [];

    this.studentView = new StudentView($('#js-studentView'));
    this.studentView._update(this._students);
  }

  add = (event) => {
    event.preventDefault();

    this._students.push(this._createStudent());
    this.studentView._update(this._students);

    this._clean();
  }

  _createStudent () {
    const avg = this._calcAvg(this._firstGrade.value, this._secondGrade.value);

    return new Student (
      this._name.value,
      this._firstGrade.value,
      this._secondGrade.value,
      this._frequency.value,
      this._finalTest.value,
      avg,
      this._setStatus(this._frequency.value, avg, this._finalTest.value)
    );
  }

  _calcAvg (firstGrade, secondGrade) {
    return ( Number(firstGrade) + Number(secondGrade) ) / 2;
  }

  _setStatus (frequency, avg, finalTest) {
    if(frequency < 75 | avg < 30)
      return false;
    else if(avg >= 70)
      return true;
    else if (this._calcAvg(avg, finalTest) < 50)
      return false;
    return true;
  }

  _clean () {
    this._name.value = '';
    this._firstGrade.value = '';
    this._secondGrade.value = '';
    this._frequency.value = '';
    this._finalTest.value = '';

    this._name.focus();
  }

  _checkFinalTest () {
    if (this._firstGrade.value.length > 0 & this._secondGrade.value.length > 0) {
      let avg = this._calcAvg(this._firstGrade.value, this._secondGrade.value);
      
      this._finalTestDiv.hidden = (avg >= 30 & avg < 70) ? false : true;
    }
  }
}