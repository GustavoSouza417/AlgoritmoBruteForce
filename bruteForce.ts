var senha: string = "ah";

var dicionario: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"
];

const tamanhoSenha = senha.length;

function bruteForce(senha: string): string {
    var palavra: string = " ";
    
    for(let i = 0; i < tamanhoSenha; i++){
        for(let i = 0; i < dicionario.length; i++){
            if(senha == palavra)
                return "Sua senha é \'" + palavra + "\'";

            palavra = (palavra.substring(palavra.length - 1, 0)) + dicionario[i];
            console.log(palavra)
        }

        palavra += " ";
    }

    return "Sua senha não foi encontrada";
}

console.log(bruteForce(senha));