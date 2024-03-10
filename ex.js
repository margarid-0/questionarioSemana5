class Funcionario{
    constructor(nome, idade, salario){
      this.nome = nome
      this.idade = idade
      this.salario = salario
    }
    calcularSalario(){
      return this.salario
    }
  }
  
  class Professor extends Funcionario{
    constructor(nome, idade, salario, turma, horasTrabalhadas){
    super(nome, idade, salario)
    this.turma = turma
    this.horasTrabalhadas = horasTrabalhadas
    }

    calcularSalario(){
      return this.salario + (10 * this.horasTrabalhadas) 
    }
  }
  
  const professor1 = new Professor('Vitor', 22, 1000, 'programação', 8)
  console.log(professor1.calcularSalario())