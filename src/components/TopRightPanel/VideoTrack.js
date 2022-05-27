import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { BigHead } from '@bigheads/core';

export default function VideoTrack({ twilioRoomObj }) {
  // TODO -- attach video in here in a useEffect

  // Call control buttons for local participant
  const muteAudio = (room) => {
    room.localParticipant.audioTracks.forEach((publication) => {
      publication.track.disable();
    });
  };

  const muteVideo = (room) => {
    room.localParticipant.videoTracks.forEach((publication) => {
      publication.track.disable();
    });
  };

  const enableAudio = (room) => {
    room.localParticipant.audioTracks.forEach((publication) => {
      publication.track.enable();
    });
  };

  const enableVideo = (room) => {
    room.localParticipant.videoTracks.forEach((publication) => {
      publication.track.enable();
    });
  };

  return (
    <div className="w-7/12 mx-auto flex items-center border-2 border-dark-gray rounded">
      <div id="callControlPanel" className="flex flex-col text-lg">
        <button
          type="button"
          name="videoOff"
          onClick={() => muteVideo(twilioRoomObj)}
        >
          <FontAwesomeIcon icon={solid('video-slash')} />
        </button>

        <button
          type="button"
          name="videoOn"
          onClick={() => enableVideo(twilioRoomObj)}
        >
          <FontAwesomeIcon icon={solid('video')} />
        </button>

        <button
          type="button"
          name="micOff"
          onClick={() => muteAudio(twilioRoomObj)}
        >
          <FontAwesomeIcon icon={solid('microphone-slash')} />
        </button>

        <button
          type="button"
          name="micOn"
          onClick={() => enableAudio(twilioRoomObj)}
        >
          <FontAwesomeIcon icon={solid('microphone')} />
        </button>
      </div>

      <div id="local-media-div">
        <div className="flex flex-col items-center">
          <BigHead className="w-1/2 mb-3" />
          YOU
        </div>
      </div>
    </div>
  );
}
