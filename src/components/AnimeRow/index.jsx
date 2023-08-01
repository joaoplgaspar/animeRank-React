import AnimeCard from 'components/AnimeCard'
import React from 'react'
import styles from './AnimeRow.module.scss'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'

export default function AnimeRow({ titulo, animes, nAnimes }) {
  const [translate, setTranslate] = useState(0)

  const animesEmTela = window.screen.availWidth > 1440 ? 8 : 4
  const valorTranslate = 210

  function rowBar(n) {
    if(translate <= (-valorTranslate * nAnimes)-(-valorTranslate*animesEmTela) ) {
      return setTranslate(0)
    }

    setTranslate(translate + n)
  }

  function verificacaoSetas() {
    return !animes ? {display: "none"} : {display: "flex"}
  }

  return (
    <section className={styles.animeRow__container}>
      <h3>{titulo}</h3>

      <MdOutlineArrowBackIos className={`${styles.arrow} ${styles.arrowL}`} style={verificacaoSetas()}
        onClick={() => translate < 0 && rowBar(valorTranslate)}
      />

      <div className={styles.animeRow__cards}>
        <AnimeCard animes={animes} translate={translate}/>
      </div>
      
      <MdOutlineArrowForwardIos className={`${styles.arrow} ${styles.arrowR}`} style={verificacaoSetas()}
        onClick={() => rowBar(-valorTranslate)}
      />
    </section>
  )
}
