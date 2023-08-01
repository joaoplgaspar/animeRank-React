import { formatarTexto } from 'data/services/getApi'
import styles from './AnimeCard.module.scss'
import Card from './Card'

export default function AnimeCard({animes, translate}) {

  return (
    animes && <>
       {animes.map(anime => 
          <Card
            anime={anime}
            id={anime.id}
            image={anime.coverImage.large}
            titulo={anime.title.romaji} 
            descricao={formatarTexto(anime.description, 150)}
            styles={styles} 
            key={anime.id}
            translate={translate}
          />
        )}
    </>
  )
}
