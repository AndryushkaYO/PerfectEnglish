import React, { Component } from 'react';
import { render } from 'react-dom';
//import "../../../node_modules/video-react/styles/scss";
import "../../styles/video-react.css";
import "../../styles/video-audio.css";
import { Player } from 'video-react';

class Gallery extends Component {
    render() {
        return (
        <div id="video-player">
            <h1>Gallery Page</h1>
            <div>
            <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /></div>
          </div>);
    }
}

export default Gallery;