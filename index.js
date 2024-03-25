class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;       
    }

    atacar(){
        if(this.tipo==="ninja"){
            console.log(`O herói ${this.nome} de ${this.idade} anos, do tipo ${this.tipo} atacou usando shuriken`);
        }else if(this.tipo==="mago"){
            console.log(`O herói ${this.nome} de ${this.idade} anos, do tipo ${this.tipo} atacou usando magia`);
        }else if(this.tipo==="monge"){
            console.log(`O herói ${this.nome} de ${this.idade} anos, do tipo ${this.tipo} atacou usando artes marcias`);
        }else if(this.tipo==="guerreiro"){
            console.log(`O herói ${this.nome} de ${this.idade} anos, do tipo ${this.tipo} atacou usando espada`);
        }  
    }
}

const heroi1 = new Heroi('Davi', 21, 'ninja');

heroi1.atacar();