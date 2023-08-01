import { querys } from './querys/querys';
import { useEffect } from 'react';
import parse from 'html-react-parser';

export const apiLista = async (query = querys.query) => {
  try {
    const animeAPI = await fetch("https://graphql.anilist.co",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: querys.variablesLista
        })
      })
    const animeAPIConvertida = await animeAPI.json();
    return animeAPIConvertida.data.Page.media[0]
  } catch (error) {
    console.error(error);
  }
}

export const api = async (setAnime, query = querys.query) => {
  try {
    const animeAPI = await fetch("https://graphql.anilist.co",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: querys.variables
        })
      })
    const animeAPIConvertida = await animeAPI.json();
    setAnime(animeAPIConvertida.data.Page.media) 
  } catch (error) {
    console.error(error);
  }
}

export function AtualizarInfoApi(setter, ordenar = 'POPULARITY_DESC', perPage = 30) {
  useEffect(() => {
    querys.variables.perPage = perPage
    querys.variables.ordenar = ordenar
    api(setter)
  }, [setter, ordenar, perPage])
}

export function SearchAnime(setter, searchValue, perPage) {
  querys.variables.perPage = perPage
  querys.variables.search = searchValue
  api(setter, querys.querySimplificada)
}

export function formatarTexto(texto, tamanho) {
  return parse(texto.length >= tamanho ? `${texto.substring(tamanho, 0)}...` : texto)
}