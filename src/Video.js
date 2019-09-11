import React from 'react';
import YouTube from 'react-youtube';

export default class Video extends React.Component {

    videoOnReady(event) {
       
        event.target.pauseVideo();
        event.target.isMuted();
        
    }
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                mute: 1
                
            }
        };
        const { videoId } = this.props
        return (
            <YouTube
                videoId= {videoId}
                opts= {opts}
                onReady= { this.videoOnReady }
                onPause= { this.videoOnPause }
            />
        );
    }

}