import React from 'react';

const TextInput = ({ label,placeholder, id, name, value, onChange, error, type = 'text' }) => (
  <div className="w-full md:w-1/2 px-2 my-4 md:mb-0">
    <label className="mb-2 text-lg font-medium" htmlFor={id}>
      {label}
    </label>
    <input
      className="p-2 bg-neutral-800 text-white rounded w-full"
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <span className="text-red-500">{error}</span>}
  </div>
);

export default TextInput;
