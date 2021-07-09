import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import soundFile from './music/Musicc.ogg'

export class Music extends Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src={soundFile}
                    autoPlay
                    controls
                    loop
                   
                />
            </div>
        )
    }
}

export default Music
