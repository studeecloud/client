import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import { BigHead } from '@bigheads/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ChatPanel({ onSelect, userName, roomName }) {
  const [messages, setMessages] = useState([]);

  // Custom hook useInterval will take an action on a set time interval
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    getMessages();
  }, 250);

  const getMessages = () => {
    axios
      .get(`http://localhost:8080/messages/${roomName}`)
      .then((res) => {
        setMessages(res.data);
        console.log('message data: ', messages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="dashboard__panel relative border bg-meringue pb-6">
      <button
        type="button"
        className="absolute"
        style={{ top: '3.5%', right: '2%' }}
        onClick={onSelect}
      >
        <FontAwesomeIcon icon={solid('expand')} className="h-7" />
      </button>
      <h1 className="mt-3 mb-5 font-display text-4xl text-black text-center">
        Chat
      </h1>
      <article className="flex flex-col justify-between border w-5/6 mx-auto bg-gold p-2 rounded h-5/6 overflow-auto">
        <div>
          <MessageList messages={messages} />
        </div>
        <MessageForm getMessages={getMessages} userName={userName} roomName={roomName} />
      </article>
    </section>
  );
}
