import { default as chalk } from "chalk";
import { default as pegaArquivo } from './index.js';
import { default as validaURLs} from './http-validacao.js';

const caminho = process.argv;


async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho);