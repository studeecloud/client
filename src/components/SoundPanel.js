import PomodoroTimer from './PomodoroTimer';
import Sound from './Sound';

export default function SoundPanel({ soundData }) {
  const sounds = soundData.map((sound) => {
    return <Sound {...sound} />;
  });

  return (
    <section className="dashboard__panel relative border bg-meringue">
      <div className="flex h-full">
        <div className="w-1/2 h-full flex flex-col items-center justify-between">
          <div className="w-1/2">
            <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
              Sounds
            </h1>
          </div>

          <div className="w-7/12 h-1/3 px-6 py-2 my-auto flex flex-col justify-around text-meringue bg-teal border-2 rounded-xl">
            {sounds}
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center">
          <div className="w-1/2">
            <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
              Timer
            </h1>
          </div>

          <div className="flex items-center h-full py-8">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
