import React, { Component } from 'react';
import { render } from 'react-dom';
import "../../styles/video-react.css";
import "../../styles/video-audio.css";
import { Player } from 'video-react';
import ReactAudioPlayer from 'react-audio-player';
import ImageGallery from 'react-image-gallery';
import girl from '../../img/about/g.png';
import boy from '../../img/about/b.png';
class About extends Component {
    render() {
        return (
            <div><h1>Top 10 Fun Facts About the English Language</h1>
                <div id="video-player2">
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://r2---sn-jx25uoxu-jb3l.googlevideo.com/videoplayback?id=o-AFWJk2nblDdYe6If9EPIBIjMNWhlD-156efaWBmoSELw&itag=22&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-jx25uoxu-jb3l%2Csn-npoe7n7s&ms=au%2Crdu&mv=m&pl=24&ei=9eDjXMXON4v4ogPlvIVY&initcwndbps=36250&mime=video%2Fmp4&ratebypass=yes&dur=588.950&lmt=1534463836721597&mt=1558438086&fvip=2&c=WEB&ip=202.75.100.82&ipbits=0&expire=1558459734&sparams=ip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cei%2Cinitcwndbps%2Cmime%2Cratebypass%2Cdur%2Clmt&signature=2386C0A9C600BEA2109787971E4F6672028CD80C.8B0C7776997108E86FC3CBC8AF82F8AA71B3D870&key=yt8&video_id=WZqfiM02WBg&title=Top+10+Fun+Facts+About+the+English+Language" />
                </div>
                <img src={girl} className="girl1"/>
            <img src={boy} className="boy1"/>
            </div>);
    }
}

export default About;