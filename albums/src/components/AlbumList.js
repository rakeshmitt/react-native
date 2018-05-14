import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    console.log('componentWillMount in albumlist');
    //debugger;
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    console.log();
  }
/*  <Text key={album.title}>{album.title}</Text>
  record mention below to pass as prop can be anything like record/data/alubm
  */
  renderAlbum() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
          {this.renderAlbum()}
      </ScrollView>
    );
  }
}

export default AlbumList;
