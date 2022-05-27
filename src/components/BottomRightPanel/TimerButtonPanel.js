import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function TimerButtonPanel({
  isActive,
  resetTimer,
  toggleTimer,
  addMinutes,
  showSettings,
  toggleSettings,
}) {
  return (
    <div className="flex justify-around items-center">
      <button id="timerSettingsButton">
        <FontAwesomeIcon
          icon={solid('gear')}
          onClick={toggleSettings}
          className="h-7"
        />
      </button>

      {/* TODO -- refactor buttons into their own component */}
      {showSettings ? (
        <>
          <button
            id="add5Min"
            className="py-0.5 px-1.5 rounded rounded-full bg-meringue text-teal "
            onClick={() => addMinutes(-5)}
          >
            -5
          </button>
          <button
            id="subtract5Min"
            className="py-0.5 px-1.5 rounded rounded-full bg-meringue text-teal "
            onClick={() => addMinutes(5)}
          >
            +5
          </button>
        </>
      ) : (
        <>
          <button id="timerPlayButton" onClick={toggleTimer} className="">
            {isActive ? (
              <FontAwesomeIcon icon={solid('circle-pause')} className="h-7" />
            ) : (
              <FontAwesomeIcon icon={solid('circle-play')} className="h-7" />
            )}
          </button>
          <button id="timerResetButton" onClick={resetTimer} className="">
            <FontAwesomeIcon icon={solid('rotate-right')} className="h-7" />
          </button>
        </>
      )}
    </div>
  );
}
