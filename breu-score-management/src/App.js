import logo from './logo.svg';
import './App.css';

import { ListboxComponent } from './ui-components';

import { 
  ListBoxtitle 
} from './ui-components';

import { 
  DropdownList 
} from './ui-components';
import awsvideoconfig from './aws-video-exports';

import React from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer from 'react-video-js-player';


const videoJsOptions = {
  autoplay: true,
  controls: true,
  source: {...awsvideoconfig.awsOutputLiveLL}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <VideoPlayer {...videoJsOptions}/> */}
      <video
            controls={true}
            autoPlay={true}
            autoSave={true}
            src={"https://45x7pdva3typsu.data.mediastore.ap-northeast-1.amazonaws.com/p/index.m3u8"}
            width="720"
            height="420"
        />
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
      </header>
    </div>
  );
}

export default App;
