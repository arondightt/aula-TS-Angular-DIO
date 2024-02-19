//decorators
//decorators são funções que modificam comportamento de classes, métodos, propriedades, parâmetros, acessores, etc.
/*function ExibirNome(target: any) {
    console.log(target)
}
@ExibirNome
class Funcionario {}
*/
//class decorators
/*
function apiVersion (version: string) {
    return (target:any) => {
        Object.assign(target.prototype, { __version: version, __name : 'megaman' })
    }
}

@apiVersion("1.10")
class API {}

const api = new API()
console.log(api.__version) // API { __version: '1.10' }

*/
// attribute decorators
function Minlength(length: number) {
    return(target:any, key: string) =>{
        let __value = target[key];

        const getter = () => __value;
        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`)
            } else {
                __value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}
class API {
    @Minlength(3)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const api = new API('produtos')
console.log(api.name)

