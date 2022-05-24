import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, createLocalTracks } from 'twilio-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import App from './App';
import { TimerProvider } from './context/TimerContext';
import { SoundProvider } from './context/SoundContext';

function Loader() {
  const [token, setToken] = useState('');
  const [twilioRoomObj, setTwilioRoomObj] = useState(null);

  const queryParams = new URLSearchParams(window.location.search);
  const userName = queryParams.get('username');
  const roomName = queryParams.get('room');

  useEffect(() => {
    if (userName !== null && roomName !== null) {
      axios
        .get(
          `https://studeecloud-server.herokuapp.com/video/token/${userName}/${roomName}`
        )
        .then((res) => {
          setToken(res.data);
        });
    }
  }, []);

  useEffect(() => {
    createLocalTracks({
      audio: true,
      video: { width: 640 },
    })
      .then((localTracks) => {
        // Use the unique user token to connect to the given room name with the given local media tracks
        return connect(token, {
          tracks: localTracks,
        });
      })
      .then((room) => {
        console.log(`Room joined: ${room.name}`);
        console.log(room);
        setTwilioRoomObj(room);
      });
  }, [token]);

  return (
    <main className="bg-teal h-screen flex flex-col justify-center">
      {token !== '' && twilioRoomObj !== null && (
        <TimerProvider>
          <SoundProvider>
            <App userName={userName} twilioRoomObj={twilioRoomObj} />
          </SoundProvider>
        </TimerProvider>
      )}

      {token === '' ||
        (twilioRoomObj === null && (
          <>
            <h1 className="mb-12 font-display text-7xl text-meringue text-center">
              StudeeCloud
            </h1>
            <div className="flex justify-center items-center mb-8">
              <FontAwesomeIcon
                icon={solid('face-clouds')}
                className="text-meringue h-16"
              />
              <h2 className="font-header text-5xl text-meringue text-center">
                <strong> Loading... </strong>
              </h2>
              <FontAwesomeIcon
                icon={solid('face-clouds')}
                className="text-meringue h-16"
              />
            </div>
            <img
              src="loadingSpinner.png"
              className="animate-spin w-1/12 mx-auto"
              alt="Loading"
            />
          </>
        ))}
    </main>
  );
}

export default Loader;
