import styles from './BotaoMinhaLista.module.scss'
import {MdOutlineAddCircleOutline, MdOutlineDownloadDone} from 'react-icons/md'
import { useState } from 'react'
import adicionarAnime from 'common/localStorage/LocalStorage'
import { useEffect } from 'react'
const animeLista = JSON.parse(localStorage.getItem("anime_assistir")) || []

export default function BotaoMinhaLista({small, anime, id}) {
  

  const [botao, setBotao] = useState()

  useEffect( () => {
    const estaNaLista = animeLista.find(elemento => elemento.animeId === id)
    if(estaNaLista) {
      setBotao(<MdOutlineDownloadDone key="remover"/>)
    } else {setBotao(<MdOutlineAddCircleOutline key="adicionar"/>)}
  }, [anime, id])


  function mudarLista(e) {
    adicionarAnime(e, "lista", anime)

    if(botao.key === "adicionar") {
      return setBotao(<MdOutlineDownloadDone key="remover"/>)
    }
    
    setBotao(<MdOutlineAddCircleOutline key="adicionar"/>)
  }

  return (
    !small ? <div className={styles.btnMinhaLista}>
        <button onClick={(event) => mudarLista(event)}>
          {botao}
        </button>
        <span>Minha Lista</span>
    </div> 
    
    : <div className={`${styles.btnMinhaLista} ${styles.btnMinhaLista__small}`}>
        <button onClick={() => mudarLista()}>
          {botao}
        </button>
      </div> 
  )
}

