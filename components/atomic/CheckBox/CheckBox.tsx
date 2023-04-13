interface Props {
  isChecked: (value: boolean) => void;
  label: string;
}

const CheckBox = ({ isChecked, label }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div className="flex items-center">
      <input
        onChange={handleChange}
        id="checkbox"
        type="checkbox"
        value=""
        name="bordered-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="checkbox"
        className="w-full py-4 ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
