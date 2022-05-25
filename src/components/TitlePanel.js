import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function TitlePanel(props) {
  const {
    roomName, //used in displaying roomName
    joinRoomLink,
  } = props;

  return (
    <section className="dashboard__panel relative border bg-meringue py-4">
      <div className="h-full flex flex-col justify-between">
        <div></div>
        <div>
          <h1 className="mt-3 mb-5 font-display text-teal text-5xl text-center">
            StudeeCloud
          </h1>

          <h2 className="font-header text-dark-gray text-3xl text-center">
            learn together
          </h2>
        </div>

        <div className="flex items-center justify-center mb-2">
          <h3 className="font-body text-dark-gray text-2xl mr-3">
            <strong>Invite your team to</strong>
          </h3>
          <div className="w-fit px-4 py-2 flex items-center justify-center border-2 rounded-lg">
            <button
              type="button"
              className="flex items-center text-body text-teal text-xl"
              onClick={() => navigator.clipboard.writeText(joinRoomLink)}
            >
              <span className="font-body text-dark-gray text-2xl">
                {roomName}
              </span>
              <FontAwesomeIcon icon={light('clone')} className="ml-4 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
