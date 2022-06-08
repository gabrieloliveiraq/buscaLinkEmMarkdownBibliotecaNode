import { default as chalk } from "chalk";
import { default as fs } from "fs";
// const chalk = require('fs');
// const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Falha ao localizar o arquivo'));
}


/*      *** Função com async e await ***       */
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
}
pegaArquivo('./arquivos/texto.md');



/*      *** Função com promises (.then, .catch) ***       */
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8'
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }
// pegaArquivo('./arquivos/texto.md');



/*      *** Função Comum ***       */
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         } else {
//         console.log(chalk.green(texto))};
//     })
// }
// pegaArquivo('./arquivos/texto.md')