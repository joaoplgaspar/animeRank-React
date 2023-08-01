import BotaoAvaliar from 'components/BotaoAvaliar'
import BotaoMinhaLista from 'components/BotaoMinhaLista'
import React from 'react'
import styles from './BannerAnime.module.scss'

export default function BannerAnime({titulo, descricao, banner, anime}) {
  return (
    <div className={styles.banner__container}>
        <div className={styles.banner__content}>
            <div className={styles.info}>
              <h2>{titulo}</h2>
              <p>{descricao}</p>
            </div>
            <div className={styles.btn__container}> 
              <BotaoMinhaLista anime={anime} id={anime.id}/>
              <BotaoAvaliar anime={anime} id={anime.id}/>
            </div>
        </div>
        <img src={banner} alt="" />
    </div>
  )
}

