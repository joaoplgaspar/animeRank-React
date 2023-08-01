import { Autocomplete, TextField } from '@mui/material'
import HeaderLink from 'components/HeaderLink'
import styles from './Header.module.scss'
import moon from './moon.png'
import { useEffect, useState } from 'react';
import { SearchAnime } from 'data/services/getApi';

export default function Header() {

  const [animesListInput, setAnimesListInput] = useState([])
  const [api, setApi] = useState([])

  function mudarValorTexto(texto) {
    SearchAnime(setApi, texto, 10, api)
  }

  useEffect( () => {
    setAnimesListInput(api.map( anime => (
      {
        label: anime.title.romaji,
        id: anime.id
      }
    )))
  }, [api, setAnimesListInput])

  return (
    <header className={styles.header}>
      <HeaderLink to="/">
        <h1>AnimeRank</h1>
      </HeaderLink>
      <img src={moon} alt='Simbolo Sailoor Moon Logo AnimeRank' />
      <nav>
        <HeaderLink to="/explorar">
          Explorar
        </HeaderLink>
        <HeaderLink to="/minhalista">
          Minha Lista
        </HeaderLink>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          noOptionsText="Anime não encontrado"
          options={animesListInput}
          sx={{ 
            width: 200,
            border: '1px solid #fff',
            borderRadius: '5px',

            '& input': {
              color: '#fff',
            },
          }}
          renderInput={(params) => <TextField {...params} label="Animes" className={styles.TextField}
            onChange={(event) => {
              mudarValorTexto(event.target.value)
            }}
          />}
        />

        <HeaderLink to="/sobre">
          Sobre
        </HeaderLink>
      </nav>
    </header>
  )
}
