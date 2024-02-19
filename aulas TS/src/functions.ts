// funções
/*
function soma(a:number, b:number):number {
    return  a + b;
}
let valor:number = soma(2, 2);

console.log(valor)
*/

//async await
async function getDatabase(id:number):Promise<string>{
    return 'felipe'
       
}
async function getName(id:number){
    let name= await getDatabase(id);
    console.log(name);
}