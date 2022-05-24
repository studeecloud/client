import { useState } from 'react';
import axios from 'axios';

/**
 * Creates MessageForm component as a child of the ChatPanel
 * @param {Function} getMessages
 * @param {String} userName
 * @returns MessageForm component
 */
export default function MessageForm({ getMessages, userName, roomName }) {
  const [message, setMessage] = useState('');

  // Prevents default behaviour of the form navigating to '/messages'
  const disableSubmit = (e) => {
    e.preventDefault();
  };

  // Submits a post request to the backend to send the message and the username to the database.
  // If no username is specified, 'NullUser' will be sent instead.
  const handleSubmit = () => {
    axios
      .post('https://studeecloud-server.herokuapp.com/messages', {
        message: message,
        userName: userName || 'NullUser',
        roomName: roomName,
      })
      .then((res) => {
        console.log('LOGGING res data');
        console.log(res);
        getMessages();
      })
      .catch((err) => {
        console.log(err);
      });
    setMessage('');
  };

  return (
    <form
      method="post"
      action="/messages"
      className="flex flex-col items-center w-full bg-gold py-2"
      onSubmit={disableSubmit}
      style={{ position: 'sticky', bottom: -10 }}
    >
      <div className="flex w-full">
        <label className="hidden">Chat with your squad</label>
        <input
          type="text"
          className="border focus:border-2 border-dark-gray py-2 px-3 mr-2 rounded w-full"
          name="message"
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ resize: 'none' }}
        ></input>
        <input
          type="submit"
          value="Send"
          className="w-24 p-2 border-2 font-body text-meringue border-dark-gray bg-teal rounded"
          onClick={handleSubmit}
          autoFocus={true}
        />
      </div>
    </form>
  );
}
