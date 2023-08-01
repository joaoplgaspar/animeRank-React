import BannerAnime from 'components/BannerAnime'
import React, { useState } from 'react'
import styles from './CarrouselBanner.module.scss'
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'
import { formatarTexto, AtualizarInfoApi } from 'data/services/getApi'

export default function CarrouselBanner() {
  const [posicaoBanner, setPosicaoBanner] = useState({posicao: 0, imagem: 1})
  const [banners, setBanners] = useState([])
  const totalDeBanners = banners.length

  AtualizarInfoApi(setBanners, 'POPULARITY_DESC', 10)

  function mudarPosicaoCarrousel(posicao, n) {
    if(posicaoBanner.imagem === totalDeBanners && n === 1){
      return setPosicaoBanner({posicao: 0, imagem: 1})
    }

    const novaPosicao = {
      posicao: Number(posicaoBanner.posicao) + posicao,
      imagem: posicaoBanner.imagem += n
    }

    return setPosicaoBanner(novaPosicao)
  }

  return (
    <div className={styles.carrousel__container}>
      <div className={styles.arrow__container}>
        <MdOutlineArrowBackIos
          className={`${posicaoBanner.posicao === 0 ? styles.disabled__arrow : ''} ${styles.arrowIcon} ${styles.arrowIcon__l}`}
          onClick={() => {
            if(posicaoBanner.posicao !== 0) mudarPosicaoCarrousel(100, -1)
          }}
        />
        <MdOutlineArrowForwardIos 
          className={`${styles.arrowIcon} ${styles.arrowIcon__r}`}
          onClick={() => {mudarPosicaoCarrousel(-100, 1)}}
        />
      </div>
      <div className={styles.banner__container} style={{marginLeft: `${posicaoBanner.posicao}vw`}}>
        {banners.map((anime) => 
          <BannerAnime 
            key={anime.id}
            anime={anime}
            banner={anime.bannerImage} 
            titulo={anime.title.romaji} 
            descricao={formatarTexto(anime.description, 450)}/>)}
      </div>
    </div>
  )
}
