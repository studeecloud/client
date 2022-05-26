import { createContext, useState, useEffect, useContext } from 'react';
import ReactHowler from 'react-howler';

const SoundContext = createContext();

function SoundProvider({ children }) {
  //Determines if each track is playing, set through function located in each sound component
  const [piano, setPiano] = useState(false);
  const [rain, setRain] = useState(false);
  const [string, setString] = useState(false);

  const [src, setSrc] = useState('');

  //React-Howler state managing playing status of tracks
  const [playing, setPlaying] = useState(false);

  //HELPER FUNCTION: COnnect playingState to each individaul sound's state
  //Setplaying is called when play-button of any sound component is clicked
  useEffect(() => {
    setPlaying(piano || rain || string ? true : false);
  }, [piano, rain, string]);

  //All necessary states for app to track when rerendering
  const states = { piano, setPiano, rain, setRain, string, setString, setSrc };
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
