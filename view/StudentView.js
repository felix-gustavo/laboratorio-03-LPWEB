class StudentView {
	constructor (elemento) {
		this._elemento = elemento;
	}
	
	_renderView = (student) => {
		this._student = student;
		return `
			<h1>${this._student.name}</h1>
		`;
	}

	_update = (student) => {
		this._elemento.innerHTML = this._renderView(student);
	}
}