import React, { ReactNode, FormEvent } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isRegistered?: boolean;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, isRegistered = false }) => (
  <form className="w-full md:mt-10 sm:mt-5" onSubmit={onSubmit}>
    {children}
    {!isRegistered && (
      <div className="flex justify-end">
        <button
          className="px-8 py-2 bg-[#361251] hover:bg-purple-600 text-white text-lg font-bold rounded"
          type="submit"
        >
          REGISTER
        </button>
      </div>
    )}
  </form>
);

export default Form;
