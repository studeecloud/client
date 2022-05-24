import PomodoroTimer from './PomodoroTimer';
import PianoSound from './PianoSound';
import RainSound from './RainSound';
import StringSound from './StringSound';

export default function SoundPanel() {
  return (
    <section className="dashboard__panel relative border bg-meringue">
      <div className="flex flex-col h-full">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="mt-3 mb-2 font-display text-deep-purple text-4xl text-center">
              Soundboard
            </h1>
            <h2 className="mb-3 font-header text-lg text-center"><strong>SFX</strong></h2>
          </div>
          <div className="w-1/2">
            <h1 className="mt-3 mb-2 font-display text-deep-purple text-4xl text-center">
              Timer
            </h1>
            <h2 className="mb-3 font-header text-lg text-center"><strong>Stay on task</strong></h2>
          </div>
        </div>

        <div className="flex items-center mt-6">
          <div className="w-1/2">
            <StringSound />
            <RainSound />
            <PianoSound />
          </div>

          <div className="w-1/2 border-l-2 border-dashed">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
