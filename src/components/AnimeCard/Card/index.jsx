import BotaoAvaliar from 'components/BotaoAvaliar'
import BotaoMinhaLista from 'components/BotaoMinhaLista'
import React from 'react'

export default function Card({styles, image, titulo, descricao, translate, anime}) {

  return (
    <div className={styles.animeCard__container} style={{transform: `translateX(${translate}px)`}}>
        <div className={styles.animeCard__info}>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <div className={styles.btnCard}>
                <BotaoMinhaLista small anime={anime} id={anime.id}/>
                <BotaoAvaliar small anime={anime} id={anime.id}/>
            </div>
        </div>
        <div className={styles.image__container}>
            <img src={image} alt="" />
        </div>
    </div>
  )
}
