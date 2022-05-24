import './App.css';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { BigHead } from '@bigheads/core';
import {
  connect,
  createLocalTracks,
  createLocalVideoTrack,
} from 'twilio-video';
// import { useTimer } from 'use-timer';
import TimerTest from './components/TimerTests';
import PomodoroTimer from './components/PomodoroTimer';

import Login from './pages/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import TitlePanel from './components/TitlePanel';
import VideoPanel from './components/VideoPanel';
import ChatPanel from './components/ChatPanel';
import SoundPanel from './components/SoundPanel';

function App({ userName, twilioRoomObj }) {
  const roomName = twilioRoomObj.name;

  // const [data, setData] = useState([]); // TODO -- old code, remove
  const [panelState, setPanelState] = useState({ focused: null });

  //Changes panelState by panel id
  const selectPanel = (id) => {
    setPanelState((prev) => ({
      focused: prev.focused ? null : id,
    }));
  };

  // TODO -- delete the 9 lines of code below this -- we're not using the headArray anymore, that was for testing
  // const headNum = 5;
  // const headArray = [];
  // for (let i = 1; i <= headNum; i++) {
  //   headArray.push(
  //     <div style={{ width: '5rem' }} key={i.toString()}>
  //       <BigHead />
  //     </div>
  //   );
  // }

  // Test data for panels
  const panelData = [
    {
      id: 1,
      title: 'Pomodoro',
      bodyText: '07:23',
    },
    {
      id: 2,
      title: 'Videos',
      bodyText: 'VIDEOFEED',
    },
    {
      id: 3,
      title: 'Chat',
      bodyText: 'BLAHBLAH',
    },
    {
      id: 4,
      title: 'Soundboard',
      bodyText: 'BOOP BEEP SOUNDSOUND',
    },
  ];

  const dashboardClasses = classnames('dashboard', {
    'dashboard--focused': panelState.focused,
  });

  // Take the array of panel data and make an array of panel elements
  const panels = panelData
    .filter(
      (panel) => panelState.focused === null || panelState.focused === panel.id
    )
    .map((panel) => {
      if (panel.id === 1)
        return (
          <TitlePanel
            key={1}
            roomName={roomName}
            onSelect={() => selectPanel(1)}
          />
        );
      else if (panel.id === 2)
        return (
          <VideoPanel
            key={2}
            twilioRoomObj={twilioRoomObj}
            onSelect={() => selectPanel(2)}
            focused={panelState.focused === 2}
          />
        );
      else if (panel.id === 3)
        return (
          <ChatPanel
            key={3}
            onSelect={() => selectPanel(3)}
            userName={userName}
            roomName={roomName}
          />
        );
      else if (panel.id === 4)
        return <SoundPanel key={4} onSelect={() => selectPanel(4)} />;
    });

  return <main className={dashboardClasses}>{panels}</main>;
}

export default App;
