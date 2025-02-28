import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectInputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: Option[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  error,
  options,
}) => (
  <div className="w-full md:w-1/2 px-2 my-4 md:mb-0">
    <label className="mb-2 text-lg font-medium" htmlFor={id}>
      {label}
    </label>
    <select
      className="p-2 bg-neutral-800 text-white rounded w-full"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <span className="text-red-500">{error}</span>}
  </div>
);

export default SelectInput;
