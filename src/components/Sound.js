import { useSound } from '../context/SoundContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Sound({ fileName, soundName }) {
  const { sound, setSound, setSrc } = useSound();

  //Sets playing state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setSound(true);
    setSrc(`https://studeecloud-server.herokuapp.com/public/${fileName}`);
  };

  const pauseSound = () => {
    setSound(false);
  };

  return (
    <section className="flex flex-row justify-between items-center">
      <div>
        <h1 className="font-body text-2xl text-center">{soundName}</h1>
      </div>
      <div>
        {sound ? (
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
