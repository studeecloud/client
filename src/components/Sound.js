import classnames from 'classnames';

export default function Sound({ name, selectSound, isSelected }) {
  const soundNameClasses = classnames(
    'font-body text-3xl text-center px-4 py-1 border-2',
    {
      'text-teal bg-meringue rounded-full': isSelected,
      'text-meringue border-teal': !isSelected,
    }
  );

  return (
    <section className="mb-2 flex flex-row justify-center items-center">
      <h1 onClick={selectSound} className={soundNameClasses}>
        {name}
      </h1>
    </section>
  );
}
