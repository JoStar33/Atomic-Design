interface Props {
  label: string;
  setValue: (value: string) => {};
}

const Input = ({ label, setValue }: Props) => {
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
    <div>
      <label
        htmlFor="last-name"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          onChange={handleClick}
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
