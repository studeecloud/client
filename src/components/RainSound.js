import { useSound } from '../context/SoundContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function RainSound() {
  const { rain, setRain, setSrc } = useSound();

  //Setsplaying state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setRain(true);
    setSrc('https://studeecloud-server.herokuapp.com/public/Rain.mp3');
  };

  const pauseSound = () => {
    setRain(false);
  };

  return (
    <section className="flex flex-row justify-around">
      <div>
        <h1 className="font-body text-2xl text-center">Rainy</h1>
      </div>
      <div>
        {rain ? (
          <button onClick={pauseSound}>
            <FontAwesomeIcon icon={solid('circle-pause')} />
          </button>
        ) : (
          <button onClick={playSound}>
            <FontAwesomeIcon icon={solid('circle-play')} />
          </button>
        )}
      </div>
    </section>
  );
}
