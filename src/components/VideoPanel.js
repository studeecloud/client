import { useState, useEffect } from 'react';
import { BigHead } from '@bigheads/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { createLocalVideoTrack } from 'twilio-video';
import classnames from 'classnames';

export default function VideoPanel({ onSelect, twilioRoomObj, focused }) {
  // TODO -- Update this so the Big Heads aren't regenerated on each click to this panel
  const [showVideos, setShowVideos] = useState(true);

  const toggleShowVideos = () => {
    if (showVideos) {
      setShowVideos(false);
      return;
    }
    setShowVideos(true);
  };

  // If we receive an event indicating a track was disabled, execute the code inside

  const handleTrackDisabled = (track) => {
    track.off('disabled', () => {
      // TODO - render Big Head avatar
      console.log('Track disabled:');
      console.log(track);
    });

    track.on('disabled', () => {
      // TODO - render Big Head avatar
      console.log('Track disabled:');
      console.log(track);
    });
  };
  // If we receive an event indicating a track was enabled, execute the code inside
  const handleTrackEnabled = (track) => {
    track.off('enabled', () => {
      // TODO - render Big Head avatar
      console.log('Track enabled:');
      console.log(track);
    });

    track.on('enabled', () => {
      // TODO - render Big Head avatar
      console.log('Track enabled:');
      console.log(track);
    });
  };

  const attachVideoTrack = (track, containerId) => {
    if (document.getElementById(containerId)) {
      const container = document.getElementById(containerId);
      container.replaceChild(track.attach(), container.firstChild);
    }
  };

  useEffect(() => {
    // Display a local camera preview
    createLocalVideoTrack().then((track) =>
      attachVideoTrack(track, 'local-media-div')
    );

    // Iterate over remote participants in the room
    twilioRoomObj.participants.forEach((participant) => {
      // Iterate over media tracks for the participant
      participant.tracks.forEach((publication) => {
        // If the media track is published, display it
        if (publication.track) {
          attachVideoTrack(publication.track, 'remote-media-div');
        }

        // Attach the listeners to every subscribed media track
        if (publication.isSubscribed) {
          handleTrackEnabled(publication.track);
          handleTrackDisabled(publication.track);
        }

        // First remove existing event listeners to avoid errors related to too many event listeners
        publication.off('subscribed', handleTrackDisabled);
        publication.off('subscribed', handleTrackEnabled);

        publication.off('unsubscribed', () => {
          // TODO - render Big Heads avatar
          console.log('Publication unsubscribed:');
          console.log(publication);
        });

        publication.off('subscribed', () => {
          console.log('Publication subscribed:');
          console.log(publication);
        });

        // When a new media track is subscribed, attach the listeners to it
        publication.on('subscribed', handleTrackDisabled);
        publication.on('subscribed', handleTrackEnabled);

        publication.on('unsubscribed', () => {
          // TODO - render Big Heads avatar
          console.log('Publication unsubscribed:');
          console.log(publication);
        });

        publication.on('subscribed', () => {
          console.log('Publication subscribed:');
          console.log(publication);
        });
      });

      // Display any new media tracks that are subscribed by participants in the room
      participant.off('trackSubscribed', (track) => {
        attachVideoTrack(track, 'remote-media-div');

        participant.tracks.forEach((publication) => {
          attachVideoTrack(publication, 'remote-media-div');
        });
      });

      participant.on('trackSubscribed', (track) => {
        attachVideoTrack(track, 'remote-media-div');

        participant.tracks.forEach((publication) => {
          attachVideoTrack(publication, 'remote-media-div');
        });
      });
    });

    // When a new participant connects, display their published media tracks
    twilioRoomObj.off('participantConnected', (participant) => {
      // When a participant joins, we iterate over the possible media tracks that they might be broadcasting at the time that they join the Room
      participant.tracks.forEach((publication) => {
        // If a given media track is being broadcast, we grab it and use it to replace the existing child of 'remote-media-div'

        if (publication.isSubscribed) {
          const track = publication.track;
          attachVideoTrack(track, 'remote-media-div');
        }
      });

      // If a participant begins broadcasting a media track that they were not broadcasting when they joined the call, this event is triggered
      participant.off('trackSubscribed', (track) => {
        // When that happens, we use it to replace the existing child of 'remote-media-div'
        attachVideoTrack(track, 'remote-media-div');
      });

      participant.on('trackSubscribed', (track) => {
        // When that happens, we use it to replace the existing child of 'remote-media-div'
        console.log('Remote attacher 3');
        attachVideoTrack(track, 'remote-media-div');
      });
    });

    twilioRoomObj.on('participantConnected', (participant) => {
      // When a participant joins, we iterate over the possible media tracks that they might be broadcasting at the time that they join the Room
      participant.tracks.forEach((publication) => {
        // If a given media track is being broadcast, we grab it and use it to replace the existing child of 'remote-media-div'
        if (publication.isSubscribed) {
          console.log('Remote attacher 4');
          const track = publication.track;
          attachVideoTrack(track, 'remote-media-div');
        }
      });

      // If a participant begins broadcasting a media track that they were not broadcasting when they joined the call, this event is triggered
      participant.off('trackSubscribed', (track) => {
        // When that happens, we use it to replace the existing child of 'remote-media-div'
        attachVideoTrack(track, 'remote-media-div');
      });

      participant.on('trackSubscribed', (track) => {
        console.log('Remote attacher 5');
        // When that happens, we use it to replace the existing child of 'remote-media-div'
        attachVideoTrack(track, 'remote-media-div');
      });
    });

    // When a participant disconnects, detach their media tracks
    twilioRoomObj.off('participantDisconnected', (participant) => {
      participant.tracks.forEach((publication) => {
        console.log('Participant "%s" disconnected', participant.identity);
        // TODO: Find the correct code for clearing the media track div, or just replace with avatar
      });
    });

    twilioRoomObj.on('participantDisconnected', (participant) => {
      participant.tracks.forEach((publication) => {
        console.log('Participant "%s" disconnected', participant.identity);
        // TODO: Find the correct code for clearing the media track div, or just replace with avatar
      });
    });
  }, [twilioRoomObj, focused, showVideos]);

  twilioRoomObj.off('disconnected', (room) => {
    // Detach local media elements
    room.localParticipant.tracks.forEach((publication) => {
      const attachedElements = publication.track.detach();
      attachedElements.forEach((element) => element.remove());
    });
  });

  twilioRoomObj.on('disconnected', (room) => {
    // Detach local media elements
    room.localParticipant.tracks.forEach((publication) => {
      const attachedElements = publication.track.detach();
      attachedElements.forEach((element) => element.remove());
    });
  });

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

  const headerClasses = classnames({
    hidden: !showVideos,
  });

  const videoGridClasses = classnames({
    hidden: !showVideos,
  });

  const focusOverlayClasses = classnames({
    hidden: showVideos,
  });

  return (
    <section className="dashboard__panel relative border bg-meringue">
      <button
        type="button"
        className="absolute"
        style={{ top: '3.5%', right: '2%' }}
        onClick={onSelect}
      >
        <FontAwesomeIcon icon={solid('expand')} className="h-7" />
      </button>

      <button
        type="button"
        className="absolute"
        style={{ top: '3.5%', right: '8%' }}
        onClick={toggleShowVideos}
      >
        <FontAwesomeIcon icon={solid('rectangle')} className="h-7" />
      </button>

      <div
        className={`flex flex-col justify-center h-full w-fit mx-auto ${focusOverlayClasses}`}
      >
        <h1 className="mt-3 mb-5 font-display text-teal text-5xl text-center">
          Focus Mode
        </h1>
      </div>

      <h1
        className={`mt-3 mb-5 font-display mb-6 text-4xl text-center text-teal ${headerClasses}`}
      >
        Squad
      </h1>

      <div className={`grid grid-rows-2 grid-cols-2 gap-3 ${videoGridClasses}`}>
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

        <div
          id="remote-media-div"
          className="w-7/12 border-2 border-dark-gray mx-auto rounded"
        >
          <div className="flex flex-col items-center">
            <BigHead className="w-1/2 mb-3" />
            LISA
          </div>
        </div>

        <div className="w-7/12 border-2 border-dark-gray mx-auto rounded">
          <div className="flex flex-col items-center">
            <BigHead className="w-1/2 mb-3" />
            KEHAN
          </div>
        </div>

        <div className="w-7/12 border-2 border-dark-gray mx-auto rounded">
          <div className="flex flex-col items-center">
            <BigHead className="w-1/2 mb-3" />
            GONZO
          </div>
        </div>
      </div>
    </section>
  );
}
