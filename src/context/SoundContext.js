import { createContext, useState, useContext } from 'react';
import ReactHowler from 'react-howler';

const SoundContext = createContext();

function SoundProvider({ children }) {
  const [src, setSrc] = useState('');

  const toggleSound = (fileName) => {
    setSrc(
      !!src ? '' : `https://studeecloud-server.herokuapp.com/public/${fileName}`
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
