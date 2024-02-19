//generics são tipos que são passados como parâmetros para a definição de tipos em classes, interfaces e funções
//exemplo de uso:
function concatArray(...itens:any[]):any[]{
    return new Array().concat(...itens);

}

const numArray = concatArray([1,2,3], [4,5,6]);

const strArray = concatArray(['a', 'b', 'c'], ['d', 'e', 'f']);
console.log(numArray);
console.log(strArray);

numArray.push('teste'); //não gera erro pois o tipo do array é any
console.log(numArray);

function concatArray2<T>(...items: T[]): T[] {
    return new Array().concat(...items);
}

const numArray2 = concatArray2<number[]>([1, 2, 3], [4, 5, 6]);
const strArray2 = concatArray2<string[]>(['a', 'b', 'c'], ['d', 'e', 'f']);

console.log(numArray2);
console.log(strArray2);

// npm numArray2.push('teste'); //gera erro pois o tipo do array é number