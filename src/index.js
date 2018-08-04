import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCgijOAYHAubfTkf2sveenUh_wpFyB2B2A'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleVideoSearch('japan')
  }

  handleVideoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  handleVideoSelect = (selectedVideo) => {
    this.setState({selectedVideo})
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChage={this.handleVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
