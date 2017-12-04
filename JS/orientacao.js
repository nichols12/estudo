//cria a classe pessoa
var Pessoa = function (nome) {
	this.nome = nome;
}
//declara o metodo caminhas(walk)
Pessoa.prototype.walk = function(){
	console.log('eu '+this.nome+' caminhando');
}
//cria metodo falar
Pessoa.prototype.caller = function(){
	console.log('eu '+this.nome+' falando');
}
//cria o metodo sentar
Pessoa.prototype.sentar = function(){
	console.log('eu '+this.nome+' sentando');
}

//criando uma nova classe Trabalhador
var Trabalhador = function(nome){
	this.nome = nome;
}
//herda os metodos da classe Pessoa
Trabalhador.prototype = Object.create(Pessoa.prototype);

//efetua o polimorfismo de cada classe de Pessoa
Trabalhador.prototype.walk = function(){
	console.log('eu '+this.nome+' estou indo trabalhar!');
}
Trabalhador.prototype.caller = function(){
	console.log('eu '+this.nome+' não tenho tempo para conversas');
}
Trabalhador.prototype.sentar = function(){
	console.log('uffs finalmente descansei');
}


var trabalhador1 = new Trabalhador('Karina');

trabalhador1.walk();

//instacia o objeto Pessoa na váriavel pessoa1
var pessoa1 = new Pessoa('Nicholas');
//exevuta o metodo calller;
pessoa1.caller();
pessoa1.walk();