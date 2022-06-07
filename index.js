import { default as chalk } from "chalk";
import {default as fs} from "fs";
// const chalk = require('fs');
// const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Falha ao localizar o arquivo'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        } else {
        console.log(chalk.green(texto))};
    })
}

pegaArquivo('./arquivos/texto.md');