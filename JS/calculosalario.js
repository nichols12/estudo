var Funcionario = function(nome,tempo,salario){
	this.nome = nome;
	this.tempo = tempo;
	this.salario = salario;
	console.log(this);
}
Funcionario.prototype.calculaSalario = function() {
	//verifica quantos meses fechados o funcionário trabalha
	var anosCompletos = parseInt(this.tempo/12);
	//cria a porcentagem
	//altera o valor do salario do funcionário
	this.salario = this.salario * (1 + (anosCompletos * 0.1));
	console.log(this.salario);
}
//váriovel criada para isntanciar um novo funcionário
var novofuncionário;
//função que será usada para criar um novo funcionário
function createFuncionario(){
	//cria o novo funcionário
	novofuncionário = new Funcionario(
		document.getElementById('nome').value,
		document.getElementById('tempo').value,
		document.getElementById('salario').value
		);
	console.log(novofuncionário);
}