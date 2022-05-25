export default function Message({ user, body }) {
  return (
    <article className="flex flex-col border border-dark-gray rounded px-2 bg-meringue mb-2">
      <header>
        <h2 className="mx-1 font-body break-all">
          <small>
            <strong>{user}</strong>
          </small>
        </h2>
      </header>

      <p className="my-auto mx-1 font-body break-all">{body}</p>
    </article>
  );
}
