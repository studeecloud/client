import './App.css';
import React, { useState } from 'react';
import classnames from 'classnames';
import TitlePanel from './components/TitlePanel';
import VideoPanel from './components/VideoPanel';
import ChatPanel from './components/ChatPanel';
import SoundPanel from './components/SoundPanel';

function App({ userName, twilioRoomObj }) {
  const [panelState, setPanelState] = useState({ focused: null });
  const roomName = twilioRoomObj.name;
  const joinRoomLink =
    window.location.origin + '/join_room.html?room=' + roomName;

  const soundData = [
    { file: 'Strings.mp3', name: 'Violin' },
    { file: 'Rain.mp3', name: 'Storm' },
    { file: 'Piano.mp3', name: 'Piano' },
  ];

  //Changes panelState by panel id
  const selectPanel = (id) => {
    setPanelState((prev) => ({
      focused: prev.focused ? null : id,
    }));
  };

  const panelData = [
    {
      id: 1,
      title: 'Title',
    },
    {
      id: 2,
      title: 'Videos',
    },
    {
      id: 3,
      title: 'Chat',
    },
    {
      id: 4,
      title: 'Soundboard|Timer',
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
          <TitlePanel key={1} roomName={roomName} joinRoomLink={joinRoomLink} />
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
        return <SoundPanel key={4} soundData={soundData} />;
      return null;
    });

  return <main className={dashboardClasses}>{panels}</main>;
}

export default App;
