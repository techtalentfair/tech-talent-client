"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import UploadInput from "./UploadInput";

interface CorporateRegisterFormProps {
  eventId: string;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
}

interface Errors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  nationalIdFrontUrl?: string;
  nationalIdBackUrl?: string;
}

export default function CorporateRegisterForm({ eventId }: CorporateRegisterFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
  });
  const [nationalIdFrontUrl, setNationalIdFrontUrl] = useState<string>("");
  const [nationalIdBackUrl, setNationalIdBackUrl] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  const validate = (): boolean => {
    const tempErrors: Errors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!nationalIdFrontUrl)
      tempErrors.nationalIdFrontUrl = "You must upload your National ID Front";
    if (!nationalIdBackUrl)
      tempErrors.nationalIdBackUrl = "You must upload your National ID Back";
    if (!formData.companyName)
      tempErrors.companyName = "Company Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log("Form Data: ", formData);
        console.log("National ID Front URL: ", nationalIdFrontUrl);
        console.log("National ID Back URL: ", nationalIdBackUrl);
        console.log("Event ID: ", eventId);
        setIsRegistered(true);
        setFormData({ fullName: "", companyName: "", email: "", phoneNumber: "" });
        setNationalIdFrontUrl("");
        setNationalIdBackUrl("");
      } catch (error) {
        alert((error as Error).message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} isRegistered={isRegistered}>
      <p className="mb-4 md:mb-5 text-[#999] text-sm sm:text-base md:text-lg">
        Use the form below to register as a corporate entity. If you are
        registering as an individual student or a different entity type, please
        select the appropriate tab above.
      </p>
      {isRegistered ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-green-500 text-white p-4 rounded-full mb-4 animate-bounce shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-10 md:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-extrabold font-['Inter'] text-white bg-green-500 p-4 rounded-lg shadow-md animate-pulse">
            Registered Successfully!
          </h2>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap mb-4 -mx-2">
            <TextInput
              label="Full Name"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="Please enter your full name"
            />
            <TextInput
              label="Company Name"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              error={errors.companyName}
              placeholder="Please enter your Company Name"
            />
            <UploadInput
              id="nationalIdFrontUrl"
              label="National ID Front"
              placeholder="Please upload your National ID Front as an image"
              url={nationalIdFrontUrl}
              setUrl={setNationalIdFrontUrl}
              allowedTypes={["image/png", "image/jpeg"]}
              error={errors.nationalIdFrontUrl}
            />
            <UploadInput
              id="nationalIdBackUrl"
              label="National ID Back"
              placeholder="Please upload your National ID Back as an image"
              url={nationalIdBackUrl}
              setUrl={setNationalIdBackUrl}
              allowedTypes={["image/png", "image/jpeg"]}
              error={errors.nationalIdBackUrl}
            />
          </div>
          <div className="flex flex-wrap mb-4 -mx-2">
            <TextInput
              label="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Please enter your Email"
            />
            <TextInput
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              placeholder="Please enter your Phone Number"
            />
          </div>
        </>
      )}
    </Form>
  );
}
