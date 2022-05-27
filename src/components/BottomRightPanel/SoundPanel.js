import PianoSound from '../PianoSound';
import RainSound from '../RainSound';
import StringSound from '../StringSound';
import Timer from './Timer';

export default function SoundPanel() {
  return (
    <section className="dashboard__panel relative border bg-meringue">
      <div className="flex h-full">
        <div className="w-1/2 h-full flex flex-col items-center">
          <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
            Sounds
          </h1>

          <div className="w-7/12 h-1/3 my-auto px-6 py-2 flex flex-col justify-around text-meringue bg-teal border-2 rounded-xl">
            <StringSound />
            <RainSound />
            <PianoSound />
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-center">
          <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
            Timer
          </h1>

          <div className="my-auto flex items-center">
            <Timer />
          </div>
        </div>
      </div>
    </section>
  );
}
