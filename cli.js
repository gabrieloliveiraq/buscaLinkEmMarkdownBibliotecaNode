import { default as chalk } from "chalk";
import { default as pegaArquivo } from './index.js';

const caminho = process.argv;


async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);