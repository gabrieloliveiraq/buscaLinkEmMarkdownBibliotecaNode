import { default as chalk } from "chalk";
import { default as fs } from "fs";

function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Falha ao localizar o arquivo'));
}


/*      *** Função com async e await ***       */
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extrairLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.blue('Operação Concluída'));
    }
}

export default pegaArquivo;

