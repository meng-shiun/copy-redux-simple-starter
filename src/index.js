import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCgijOAYHAubfTkf2sveenUh_wpFyB2B2A'

class App extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'conan' }, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
