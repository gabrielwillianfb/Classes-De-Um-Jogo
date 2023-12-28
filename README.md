Sistema que imprime no console a classe do herói em um jogo de RPG

# 3️⃣ Escrevendo as classes de um Jogo

**O Que foi ser utilizado**

- Operadores
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- classe (ex: guerreiro, mago, monge, ninja)

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "O jogador {nome} da classe {classe} atacou usando {ataque}")
- o {nome} refere-se ao nome do jogador
- aonde a {classe} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "O jogador {nome} da classe {classe} atacou usando {ataque}"
  ex: O jogador fulano da classe Mago atacou usando Magia;
  O jogador fulano2 da classe Guerreiro atacou usando Espada.
