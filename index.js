// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=f6aceaef


const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: 'f6aceaef',
      s: searchTerm
    }
  })

  console.log(response.data)
}

const input = document.querySelector('input')

/* Debouncing an input: waiting for some time to pass after last event to actually do something */
let timeoutId;
const onInput = e => {

  timeoutId && clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    fetchData(e.target.value)
  }, 800)
}
input.addEventListener('input', onInput)