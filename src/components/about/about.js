import React, { Component } from 'react';
import { render } from 'react-dom';
import "../../styles/video-react.css";
import "../../styles/video-audio.css";
import { Player } from 'video-react';
import ReactAudioPlayer from 'react-audio-player';
class About extends Component {
    render() {
        return (
            <div><h1>About Page</h1>
                <div id="video-player">
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </div>
                <ReactAudioPlayer
                    src="http://basicenglishspeaking.com/wp-content/uploads/2016/audio/100/098-04.mp3"
                    autoPlay
                    controls
                />
            </div>);
    }
}

export default About;