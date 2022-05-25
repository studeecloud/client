import Message from './Message';

/**
 *
 * @param {Object} messages includes two keys: {String} message and {String} sender
 * @returns All Message components
 */
export default function MessageList({ messages }) {
  return (
    <>
      {messages.reverse().map((message, i) => {
        return (
          <Message
            key={i}
            user={message.sender.toUpperCase()}
            body={message.message}
          />
        );
      })}
    </>
  );
}
