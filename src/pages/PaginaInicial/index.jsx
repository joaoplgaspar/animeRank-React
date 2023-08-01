import CarrouselBanner from 'components/CarrouselBanner'
import styles from './PaginaInicial.module.scss'
import React from 'react'
import AnimeRow from 'components/AnimeRow'
import { AtualizarInfoApi } from 'data/services/getApi'
import { useState } from 'react'
import MinhaListaRow from 'components/MinhaListaRow'

export default function PaginaInicial() {
  // const [animes, setAnimes] = useState([])
  const [animesTrending, setAnimesTrending] = useState('')

  const numeroAnimesRow = 30

  // AtualizarInfoApi(setAnimes, 'POPULARITY_DESC', numeroAnimesRow)
  AtualizarInfoApi(setAnimesTrending, 'TRENDING_DESC', numeroAnimesRow)

  return (
    <main className={styles.main}>
      <CarrouselBanner />
      <AnimeRow titulo={'Lançamentos e Trending'} animes={animesTrending} nAnimes={numeroAnimesRow}/>
      <MinhaListaRow />
    </main>
  )
}
