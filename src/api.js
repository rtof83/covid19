const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = { method: 'get',
                  mode: 'cors',
                  cache: 'default' }

const getCountry = async (country) => {
  return await fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}
