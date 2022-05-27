import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSound } from '../context/SoundContext';

export default function Sound({ file, name, selectSound, isSelected }) {
  const { toggleSound, playing } = useSound();

  const soundNameClasses = classnames('font-body text-2xl text-center', {
    'text-coral': isSelected,
  });

  return (
    <section className="flex flex-row justify-between items-center">
      <div>
        <h1 className={soundNameClasses}>{name}</h1>
      </div>
      <div>
        {playing ? (
          <button onClick={selectSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-pause')} className="h-5" />
          </button>
        ) : (
          <button onClick={selectSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-play')} className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
