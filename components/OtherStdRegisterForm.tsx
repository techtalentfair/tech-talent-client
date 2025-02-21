"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import UploadInput from "./UploadInput";
import { LIST_OF_FACULTIES_OPTIONS, LIST_OF_LEVELS_OPTIONS, LIST_OF_UNIVERSITIES_OPTIONS } from "@/constants/RegisterOptionsData";

interface OtherStdRegisterFormProps {
  eventId: string;
}

interface FormData {
  studentName: string;
  university: string;
  faculty: string;
  level: string;
}

interface Errors {
  studentName?: string;
  nationalIdImage?: string;
  studentIdImage?: string;
  university?: string;
  faculty?: string;
  level?: string;
}

export default function OtherStdRegisterForm({ eventId }: OtherStdRegisterFormProps) {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    university: "",
    faculty: "",
    level: "",
  });

  const [nationalIdUrl, setNationalIdUrl] = useState<string>("");
  const [studentIdUrl, setStudentIdUrl] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };

  const validate = (): boolean => {
    const tempErrors: Errors = {};
    if (!formData.studentName) tempErrors.studentName = "Student Name is required";
    if (!nationalIdUrl) tempErrors.nationalIdImage = "You must upload your national ID";
    if (!studentIdUrl) tempErrors.studentIdImage = "You must upload your student ID";
    if (!formData.university) tempErrors.university = "University is required";
    if (!formData.faculty) tempErrors.faculty = "Faculty is required";
    if (!formData.level) tempErrors.level = "Level is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        // TODO: Implement form submission
        console.log("Form Data: ", formData);
        console.log("National ID URL: ", nationalIdUrl);
        console.log("Student ID URL: ", studentIdUrl);
        console.log("Event ID: ", eventId);

        setIsRegistered(true);
        setFormData({
          studentName: "",
          university: "",
          faculty: "",
          level: "",
        });
        setNationalIdUrl("");
        setStudentIdUrl("");
      } catch (error) {
        // TODO: Handle error
        alert((error as Error).message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} isRegistered={isRegistered}>
      <p className="mb-4 md:mb-5 text-[#999] text-sm sm:text-base md:text-lg">
        Kindly fill out the form below to register as a student if you are not
        affiliated with the Faculty of Science at Cairo University. If you are
        already registered, you can proceed directly. For students currently
        enrolled in the Faculty of Science at Cairo University, please use the
        FSCU Student tab above.
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
              label="Student Name"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              error={errors.studentName}
              placeholder="Please enter your name"
            />
            <UploadInput
              id="nationalIdImage"
              label="National ID"
              placeholder="Please upload your ID as an image"
              url={nationalIdUrl}
              setUrl={setNationalIdUrl}
              allowedTypes={["image/png", "image/jpeg"]}
              error={errors.nationalIdImage}
            />
            <UploadInput
              id="studentIdImage"
              label="Student ID"
              placeholder="Please upload your student id"
              url={studentIdUrl}
              setUrl={setStudentIdUrl}
              allowedTypes={["image/png", "image/jpeg"]}
              error={errors.studentIdImage}
            />
            <SelectInput
              label="University"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              error={errors.university}
              options={LIST_OF_UNIVERSITIES_OPTIONS}
            />
          </div>
          <div className="flex flex-wrap mb-4 -mx-2">
            <SelectInput
              label="Faculty"
              id="faculty"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              error={errors.faculty}
              options={LIST_OF_FACULTIES_OPTIONS}
            />
            <SelectInput
              label="Level"
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              error={errors.level}
              options={LIST_OF_LEVELS_OPTIONS}
            />
          </div>
        </>
      )}
    </Form>
  );
}
