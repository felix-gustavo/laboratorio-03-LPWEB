class StudentController {
  constructor() {
    let $ = document.querySelector.bind(document);
    
    this._name = $('#name');
    this._firstGrade = $('#firstGrade');
    this._secondGrade = $('#secondGrade');
    this._frequency = $('#frequency');
    this._finalTest = $('#finalTest');

    this._student = new Student();

    this.studentView = new StudentView($('#js-studentView'));
    this.studentView._update(this._student);
  }

  add = (event) => {
    event.preventDefault();

    this._student = this._createStudent();

    this.studentView._update(this._student);
  }

  _createStudent() {
    const avg = this._calcAvg(this._firstGrade.value, this._secondGrade.value);
    
    return new Student(
      this._name.value,
      this._firstGrade.value,
      this._secondGrade.value,
      this._frequency.value,
      this._finalTest.value,
      avg,
      this._setStatus(avg, this._finalTest.value)
    );
  }

  _calcAvg(firstGrade, secondGrade) {
    return ( firstGrade + secondGrade ) / 2;
  }

  _setStatus(avg, finalTest) {
    if (avg >= 70) {
      return true;
    } else if (avg < 30) {
      return false;
    } else if (this._calcAvg(avg, finalTest) < 50) {
      return false;
    }
    return true;
  }
}