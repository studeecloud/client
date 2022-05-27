import { createContext, useState, useContext } from 'react';
import ReactHowler from 'react-howler';

const SoundContext = createContext();

function SoundProvider({ children }) {
  // Determines if ANY track is playing
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState('');

  const toggleSound = (fileName) => {
    if (playing) {
      setSrc('');
      setPlaying(false);
      return;
    }
    setSrc(`https://studeecloud-server.herokuapp.com/public/${fileName}`);
    setPlaying(true);
  };

  //All necessary states for app to track when rerendering
  const states = { toggleSound, playing };

  return (
    <SoundContext.Provider value={states}>
      {children}
      <ReactHowler
        playing={playing}
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
