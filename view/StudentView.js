class StudentView {
	constructor (elemento) {
		this._elemento = elemento;
	}
	
	_renderView = (students) => {
		this._students = students;
		return `
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Nome</th>
					<th>1ª nota</th>
					<th>2ª nota</th>
					<th>Frequência</th>
					<th>Prova final</th>
					<th>Média final</th>
					<th>Situação</th>
				</tr>
			</thead>
		
			<tbody>
				${students.map(student => `
					<tr>
						<td>${student.name}</td>
						<td>${student.firstGrade}</td>
						<td>${student.secondGrade}</td> 
						<td>${student.frequency}</td>
						<td>${student.finalTest == '' ? '-' : student.finalTest}</td>
						<td>${student.avg}</td>
						<td>${student.status ? 'Aprovado' : 'Reprovado'}</td>
					</tr>          
				`).join('')}
			</tbody>

			<tfoot>
				<tr>
					<th>Aprovados</th>
					<td>
						${
							students.filter(student => student.status)
											.reduce(total => total + 1, 0)
						}
					</td>

					<th>Reprovados</th>
					<td>
						${
							students.filter(student => !student.status)
											.reduce(total => total + 1, 0)
						}
					</td>

					<th>Média da Turma</th>
					<td>
						${
							(students.reduce((total, student) => 
								total + student.avg, 0)) / students.length | 0
						}
					</td>
				</tr>
			</tfoot>
		</table>
		`;
	}

	_update = (students) => {
		this._elemento.innerHTML = this._renderView(students);
	}
}