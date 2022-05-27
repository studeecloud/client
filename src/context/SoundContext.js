import { createContext, useState, useContext } from 'react';
import ReactHowler from 'react-howler';

const SoundContext = createContext();

function SoundProvider({ children }) {
  const [src, setSrc] = useState('');

  // If a sound is playing, we pause it; if no sound is playing, we begin playing the currently selected sound
  const toggleSound = (fileName) => {
    // When a sound is playing, 'src' is a String reflecting the file name of the sound being played
    // When a sound is not playing, 'src' is an empty String
    setSrc(
      src ? '' : `https://studeecloud-server.herokuapp.com/public/${fileName}`
    );
  };

  const isPlaying = !!src;
  const states = { toggleSound, isPlaying };

  return (
    <SoundContext.Provider value={states}>
      {children}
      <ReactHowler
        playing={!!src}
        html5={true}
        loop={true}
        volume={0.6}
        src={[src]}
      />
    </SoundContext.Provider>
  );
}
export const useSound = () => useContext(SoundContext);
export { SoundProvider };
