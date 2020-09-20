// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=f6aceaef


const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: 'f6aceaef',
      s: searchTerm
    }
  })

  return response.data.Search
}

const input = document.querySelector('input')

const onInput = async e => {
  const movies = await fetchData(e.target.value)

  for (let movie of movies) {
    const div = document.createElement('div')

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `

    document.querySelector('#target').appendChild(div)
  }
}

input.addEventListener('input', debounce(onInput, 800))