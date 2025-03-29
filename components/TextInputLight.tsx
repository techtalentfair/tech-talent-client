"use clinet";
import React from "react";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error: string;
  width?: "w-full";
}

const TextInputLight = ({
  label,
  placeholder,
  id,
  name,
  value,
  onChange,
  error,
  required = false,
  type = "text",
}: Props) => {
  return (
    <div className="w-full px-2 my-4 md:mb-0">
      <label className="mb-2 text-lg font-medium text-white" htmlFor={id}>
        {label}
        {required && <span className="text-purple-500 ml-1">*</span>}
      </label>
      <input
        className="p-2 bg-neutral-100 text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
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
};

export default TextInputLight;
