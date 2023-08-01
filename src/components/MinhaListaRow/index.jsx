import AnimeRow from 'components/AnimeRow'
import { apiLista } from 'data/services/getApi'
import { useState } from 'react'
import { querys } from 'data/services/querys/querys'
import { useEffect } from 'react'

export default function MinhaListaRow() {

    const [minhaLista, setMinhaLista] = useState(JSON.parse(localStorage.getItem("anime_assistir")) || [])
    const [myListLocal, setMyListLocal] = useState(minhaLista)
    const [animes, setAnimes] = useState([])

    useEffect( () => {
        setMyListLocal(minhaLista)
        myListLocal.forEach(async function(elemento) {
            querys.variablesLista.id = elemento.animeId
            const novoAnime = await apiLista()
            animes.push(novoAnime)
        })
    }, [animes, myListLocal, minhaLista])

    return (
        <AnimeRow titulo={'Minha Lista'} animes={animes} />
    )
}
