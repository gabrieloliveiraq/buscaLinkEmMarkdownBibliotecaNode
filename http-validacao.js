import { default as fetch } from 'node-fetch';

async function checaStatus(arrayURLs) {
    // promises async await
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status;
            }))
    return arrayStatus;
}


function geraArrayDeURLs(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

export default (validaURLs)