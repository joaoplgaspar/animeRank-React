export default function adicionarAnime(event, acao, anime, nota, descricao){
    const animeAssistir = JSON.parse(localStorage.getItem("anime_assistir")) || []
    const animeRank = JSON.parse(localStorage.getItem("anime_rank")) || []

    if(acao === 'rank'){
        const animeSave = {
            "animeId": anime.id,
            "nota": nota,
            "descricao": descricao !== "" ? descricao : ""
        }

        storageAnime(animeRank, 'anime_rank', anime, animeSave, acao)
    } else {
        const animeSave = {
            "animeId": anime.id
        }

        storageAnime(animeAssistir, 'anime_assistir', anime, animeSave, acao)
    }
}

function storageAnime(storage, local, anime, animeSave, acao){
    const existe = storage.find(elemento => elemento.animeId === anime.id)
    console.log(existe)

    if(existe) {
        if(acao !== 'rank') {
            storage.splice(storage.findIndex(elemento => elemento.animeId === anime.id), 1)
            localStorage.setItem(local, JSON.stringify(storage))
        } else {
            animeSave.id = existe.id
            storage[storage.findIndex(elemento => elemento.id === existe.id)] = animeSave
        }
    } else {
        animeSave.id = storage[storage.length - 1] ? (storage[storage.length-1]).id + 1 : 0
        storage.push(animeSave)
    }

    localStorage.setItem(`${local}`, JSON.stringify(storage))
}