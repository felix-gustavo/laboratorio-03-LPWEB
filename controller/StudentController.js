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

    this._table = $('#js-studentView');
    this.studentView = new StudentView(this._table);
    this.studentView._update(this._students);
  }

  add = (event) => {
    event.preventDefault();

    this._students.push(this._createStudent());
    this.studentView._update(this._students);

    this._clean();
    this._table.hidden = false;
    this._finalTestDiv.hidden = true;
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
    if (this._firstGrade.value != '' & this._secondGrade.value != '' & this._frequency.value != '') {
      let avg = this._calcAvg(this._firstGrade.value, this._secondGrade.value);
      
      this._finalTestDiv.hidden = (avg >= 30 & avg < 70 & this._frequency.value > 75) ? false : true;
    }
  }
}