## O paradigma da programação funcional

### Objetivos de aprendizagem

- Ser capaz de explicar que existem vários paradigmas de programação
- Ser capaz de explicar a diferença básica entre os dois paradigmas de programação predominantes: programação funcional e programação orientada a objetos
- Entender, em altíssimo nível, como funciona o paradigma de programação funcional

> "Na verdade, existem vários estilos de codificação, também conhecidos como paradigmas. Um estilo comum é chamado de programação funcional, ou FP para abreviar.

Na programação funcional, usamos muitas funções e variáveis.

````javascript
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
````

- Ao escrever código **FP**, mantemos dados e funcionalidades separados e passamos dados para funções apenas quando queremos algo computado.

````javascript
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
````

- Na programação funcional, as funções retornam novos valores e, em seguida, usam esses valores em outro lugar no código.

````javascript
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
````

- Outro estilo é  a **Programação Orientada a Objetos (OOP)**. Nesse estilo, agrupamos dados e funcionalidades como propriedades e métodos dentro de objetos.

Por exemplo, se eu tiver  um objeto `virtualPet`, posso dar a ele uma  propriedade `sleepy` e um  método `nap()`:

````javascript
var virtualPet = {
    sleepy: true,
    nap: function() {}
}
````

- Na OOP, os métodos atualizam as propriedades armazenadas no objeto em vez de gerar novos valores de retorno.

Por exemplo, se eu verificar a  propriedade `sleepy` no  objeto `virtualPet`, posso confirmar que ela está definida como `true`.

No entanto, depois de executar o  método `nap()` no  objeto `virtualPet`, o  valor da propriedade `sleepy` será alterado?

````javascript
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
````

A OOP nos ajuda a modelar objetos da vida real. Ele funciona melhor quando o agrupamento de propriedades e dados em um objeto faz sentido lógico - ou seja, as propriedades e métodos "pertencem juntos".

Observe que o objetivo aqui não é discutir a OOP em profundidade; em vez disso, quero apenas mostrar-lhe a explicação mais simples do que é e como funciona, a fim de fazer a distinção mais importante entre FP e OOP.

Para resumir esse ponto, podemos dizer que o paradigma da Programação Funcional funciona mantendo os dados e funcionalidades separados. Sua contraparte, OOP, funciona mantendo os dados e a funcionalidade agrupados em objetos significativos.

- Há muito mais conceitos e ideias em programação funcional.
    - Aqui estão alguns dos mais importantes:
    - Funções de primeira classe
    - Função de ordem superior
    - Funções puras e efeitos colaterais

> Existem muitos outros conceitos e princípios na programação funcional, mas, por enquanto, vamos nos ater a esses três.

### Funções de primeira classe

Costuma-se dizer que as funções em JavaScript são "cidadãos de primeira classe". O que isso significa?

Isso significa que uma função em JavaScript é apenas mais um valor que podemos:

- [x] passar para outras funções
- [x] salvar em uma variável
- [x] retorno de outras funções

Em outras palavras, uma função em JavaScript é apenas um valor - desse ponto de vista, quase não é diferente de uma cadeia de caracteres ou um número.

Por exemplo, em JavaScript, é perfeitamente normal passar uma invocação de função para outra função.

Para explicar como isso funciona, considere o seguinte programa.

````javascript
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
````

Inicio o programa com a  função `addTwoNums()` cuja definição já usei anteriormente em várias variações. A razão pela qual essa função é um exemplo recorrente é porque é tão simples que ajuda a explicar conceitos que, de outra forma, poderiam ser um pouco mais difíceis de entender.

Em seguida, codigo uma função chamada `randomNum()` que retorna um número aleatório entre 0 e 10.

Em seguida, codigo outra função chamada `specificNum()` que retorna um número específico, o número 42.

Em seguida, salvo uma variável chamada `useRandom` e a defino como o valor booleano de `true`. Declaro outra variável, chamada `getNumber`.


Nas próximas linhas, tenho uma declaração se mais. A condição `if` é executada quando o valor de `useRandom` é definido como `true`. Se esse for o caso, toda a  declaração da função `randomNum()` será salva na  variável `getNumber`. Caso contrário, estou salvando toda a  declaração da função `specificNum()` na  variável `getNumber`.

Em outras palavras, com base no `useRandom` sendo definido como `true` ou `false`, a variável `getNumber` receberá a declaração de  função `randomNum()`  ou o  `specificNum()`  declaração de função.

Com todo esse conjunto de códigos, posso então invocar  a função `addTwoNums()`, passando-lhe a invocação das  variáveis `getNumber()` como seu primeiro e segundo argumentos.  Isso funciona porque as funções em JavaScript são verdadeiramente cidadãos de primeira classe, que podem ser atribuídos a nomes de variáveis e passados como eu passaria em torno de uma cadeia de caracteres, um número, um objeto, etc.  Nota: a maior parte do código dentro da  declaração de função `randomNum()` vem de uma lição anterior, ou seja, a lição que discutiu o **objeto Math** em JavaScript.

Isso me leva ao segundo conceito fundamental de programação funcional, que é o conceito de funções de ordem superior.

### Funções de ordem superior

Uma função de ordem superior é uma função que tem uma ou ambas as seguintes características:

- [x] Aceita outras funções como argumentos
- [x] Ele retorna funções quando invocado

Não há uma "maneira especial" de definir funções de ordem superior no JavaScript. É simplesmente uma característica da linguagem. A própria linguagem me permite passar uma função para outra função, ou retornar uma função de outra função.

Continuando da seção anterior, considere o código a seguir, no qual estou redefinindo a  função `addTwoNums()` para que seja uma função de ordem superior:

````javascript
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
````

- Você pode pensar na declaração de função acima de `addTwoNums` como  descrevendo como ela lidará com  as entradas `getNumber1` e  `getNumber2`: uma vez que as receba como argumentos, tentará invocá-las e concatenar os valores retornados dessas chamadas.

Por exemplo:

````javascript
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
````

### Funções puras e efeitos colaterais

Outro conceito de programação funcional são funções puras.

- [x] Uma função pura retorna exatamente o mesmo resultado, desde que receba os mesmos valores.

Um exemplo de uma função pura é a função `addTwoNums()` da seção anterior:

````javascript
function addTwoNums(a, b) {
    console.log(a + b)
}
````

- Esta função sempre retornará a mesma saída, com base na entrada. Por exemplo, desde que lhe demos um valor específico, digamos,  um `5` e um `6`:

````javascript
addTwoNums(5,6); // 11
````

 > ... a saída será sempre a mesma.

Outra regra para uma função ser considerada pura é que ela não deve ter efeitos colaterais. Um efeito colateral é qualquer instância em que uma função faz uma alteração fora de si mesma.

Isso inclui:

- alterar valores de variáveis fora da função em si, ou mesmo confiar em variáveis externas

- chamando uma API do navegador (até mesmo o próprio console!)

- chamando `Math.random()` - uma vez que o valor não pode ser repetido de forma confiável

O tópico de funções puras e impuras pode ficar um pouco complexo.

Por enquanto, basta saber que esse conceito existe e que está relacionado à programação funcional.
