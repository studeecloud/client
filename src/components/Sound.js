import classnames from 'classnames';

export default function Sound({ name, selectSound, isSelected }) {
  const soundNameClasses = classnames(
    'font-body text-2xl text-center px-4 py-1',
    {
      'text-teal bg-meringue border-2 rounded-full': isSelected,
      'text-meringue border-teal border-2': !isSelected,
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
