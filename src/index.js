import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCgijOAYHAubfTkf2sveenUh_wpFyB2B2A'

class App extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'ice cream' }, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
