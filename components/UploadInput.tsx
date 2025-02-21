"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { FaUpload } from "react-icons/fa";

interface UploadInputProps {
  id: string;
  label: string;
  placeholder: string;
  url: string;
  setUrl: (url: string) => void;
  allowedTypes?: string[];
  error?: string;
}

const UploadInput: React.FC<UploadInputProps> = ({
  id,
  label,
  placeholder,
  url,
  setUrl,
  allowedTypes = ["image/png"],
  error,
}) => {
  const [localError, setLocalError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && !allowedTypes.includes(file.type)) {
      setLocalError(
        `Invalid file type. Please upload a file from these types [${allowedTypes.toString()}], but we got ${file.type}`
      );
      return;
    } else {
      setLocalError(null);
    }

    if (file) {
      // TODO: Upload the file to the server
      const fileURL = URL.createObjectURL(file);
      setUrl(fileURL);
      console.log("File available at: ", fileURL);
    }
  };

  return (
    <div className="w-full md:w-1/2 px-2 my-4 md:mb-0">
      <label className="mb-2 text-lg font-medium rounded cursor-pointer">
        {label}
        <input
          id={id}
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex justify-between p-2 bg-neutral-800 text-white rounded w-full">
          <span className="text-gray-400 text-base">{placeholder}</span>
          <FaUpload size={20} className="ml-2" />
        </div>
      </label>
      {localError && <span className="text-red-500">{localError}</span>}
      {error && <span className="text-red-500">{error}</span>}
      {url && !localError && (
        <p className="text-base sm:text-lg text-green-500">File uploaded successfully!</p>
      )}
    </div>
  );
};

export default UploadInput;
