//Escreva um programa que permita inserir o nome e o poder de um ataque de um personagem. Depois, de outro personagem, o nome, a quantidade de pontos de vida, o poder de defesa e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
//Se o poder de ataque for maior do que a defesa e o defensor não possui um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
//Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
//Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
//Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de abmos os personagens.EXEMPLO DE SAÍDA:
//Situação 1:
//John atacou. Wick sofreu 4 de dano e não possui escudo. Sua vida agora é 6.
//Situação 2:
//John atacou. Wick sofreu 2 de dano por possuir escudo. Sua vida agora é 8.
//Situação 3:
//John atacou, mas não afetou o Wick. Sua vida agora é 6.

let attackerName = prompt('Insira o nome do atacante');
const attackPower = parseInt(prompt('Insira o poder de ataque'));
let defenderName = prompt('Insira o nome do defensor');
let healthPoints = parseInt(prompt('Insira a quantidade de pontos de vida'));
const defensePower = parseInt(prompt('Insira o poder de defesa'));
const hasShield = confirm('O defensor possui um escudo?'); 
let damage;
if (attackPower > defensePower) {
    if (hasShield) {
        damage = (attackPower - defensePower) / 2;
        alert(`${attackerName} atacou. ${defenderName} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${healthPoints - damage}.`);
    } else {
        damage = attackPower - defensePower;
        alert(`${attackerName} atacou. ${defenderName} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${healthPoints - damage}.`);
    }
} else {
    damage = 0;
    alert(`${attackerName} atacou, mas não afetou ${defenderName}. Nenhum dano causado!`);
}
healthPoints -= damage;
