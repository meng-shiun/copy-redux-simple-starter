import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCgijOAYHAubfTkf2sveenUh_wpFyB2B2A'

YTSearch({key: API_KEY, term: 'ice cream' }, function(data) {
  console.log(data)
})

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
