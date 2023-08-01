let query = `
query ($pageAPI: Int, $id: Int, $perPage: Int, $search: String, $ordenar: [MediaSort]) {
  Page (page: $pageAPI, perPage: $perPage) {
    pageInfo {
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (sort: $ordenar, id: $id, search: $search, type: ANIME) {
      id
      popularity
      title {
        romaji
        english
        native
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      coverImage {
        large
      }
      bannerImage
      format
      type
      status
      episodes
      chapters
      volumes
      season
      description
      averageScore
      meanScore
      genres
      synonyms
    }
  }
}
`;

let querySimplificada = `
query ($pageAPI: Int, $id: Int, $perPage: Int, $search: String, $ordenar: [MediaSort]) {
  Page (page: $pageAPI, perPage: $perPage) {
    pageInfo {
      currentPage
    }
    media (sort: $ordenar, id: $id, search: $search, type: ANIME) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      bannerImage
      genres
      description
    }
  }
}
`;


let variables = {
    // 'search': nomeDigitado,
    'perPage': 30,
    'pageAPI': 1,
    'ordenar': 'POPULARITY_DESC'
}

let variablesLista = {
  // 'search': nomeDigitado,
  'perPage': 30,
  'pageAPI': 1,
  'ordenar': 'POPULARITY_DESC'
}

export const querys = {
    variables, query, querySimplificada, variablesLista
}