import { useSound } from '../context/SoundContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Sound({ file, name }) {
  const { toggleSound, playing } = useSound();

  return (
    <section className="flex flex-row justify-between items-center">
      <div>
        <h1 className="font-body text-2xl text-center">{name}</h1>
      </div>
      <div>
        {playing ? (
          <button onClick={() => toggleSound(file)} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-pause')} className="h-5" />
          </button>
        ) : (
          <button onClick={() => toggleSound(file)} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-play')} className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
