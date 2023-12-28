class dadosRPG {
  constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
  }

  atacar() {
    switch (this.classe) {
      case "Guerreiro":
        this.ataque = "Espada";
        break;
      case "Mago":
        this.ataque = "Magia";
        break;
      case "Monge":
        this.ataque = "Artes Marciais";
        break;
      case "Ninja":
        this.ataque = "Shuriken";
        break;
    }
    return console.log(
      `O jogador ${this.nome} da classe ${this.classe} atacou usando ${this.ataque}`
    );
  }
}

const heroi1 = new dadosRPG("TuoTwo", 18, "Guerreiro");
const heroi2 = new dadosRPG("dwarf", 22, "Mago");
const heroi4 = new dadosRPG("giga", 15, "Ninja");
const heroi3 = new dadosRPG("Blim", 25, "Monge");

heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi1.atacar();
