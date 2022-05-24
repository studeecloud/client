import { useSound } from '../context/SoundContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function StringSound() {
  const { string, setString, setSrc } = useSound();

  //Setsplaying state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setString(true);
    setSrc('https://studeecloud-server.herokuapp.com/public/Strings.mp3');
  };

  const pauseSound = () => {
    setString(false);
  };

  return (
    <section className="flex flex-row justify-around">
      <div>
        <h1 className="font-body text-2xl text-center">Violin</h1>
      </div>
      <div>
        {string ? (
          <button onClick={pauseSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-pause')} className="h-5" />
          </button>
        ) : (
          <button onClick={playSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-play')} className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
