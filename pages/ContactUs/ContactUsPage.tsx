"use client";
import React from "react";
import Image from "next/image";
import TextInputLight from "@/components/TextInputLight";
import PhoneInputField from "@/components/PhoneInputField";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (isNameTouched) {
      if (e.target.value.trim() === "") {
        setNameError("Name is required");
      } else {
        setNameError("");
      }
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isEmailTouched) {
      if (e.target.value.trim() === "") {
        setEmailError("Email is required");
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);
  const handlePhoneChange = (e: {
    target: { value: string; name: string };
  }) => {
    setPhone(e.target.value);
    if (isPhoneTouched) {
      if (e.target.value) {
        if (e.target.value.replace(/\D/g, "").length < 10) {
          setPhoneError("Enter a valid phone number");
        } else {
          setPhoneError("");
        }
      } else {
        setPhoneError("");
      }
    }
  };

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMessageTouched, setIsMessageTouched] = useState(false);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (isMessageTouched) {
      if (e.target.value.trim() === "") {
        setErrorMessage("Message is required");
      } else if (e.target.value.length < 20) {
        setErrorMessage("Message must be at least 20 characters long");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setIsNameTouched(true);
    setIsEmailTouched(true);
    setIsPhoneTouched(true);
    setIsMessageTouched(true);

    if (name.trim() === "") {
      setNameError("Name is required");
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Invalid email address");
    }
    if (phone && phone.replace(/\D/g, "").length < 10) {
      setPhoneError("Enter a valid phone number");
    }
    if (message.trim() === "") {
      setErrorMessage("Message is required");
    } else if (message.length < 20) {
      setErrorMessage("Message must be at least 20 characters long");
    }
  };

  const handleBlur = (field: string) => {
    switch (field) {
      case "name":
        setIsNameTouched(true);
        if (name.trim() === "") {
          setNameError("Name is required");
        }
        break;
      case "email":
        setIsEmailTouched(true);
        if (email.trim() === "") {
          setEmailError("Email is required");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          setEmailError("Invalid email address");
        }
        break;
      case "phone":
        setIsPhoneTouched(true);
        if (phone && phone.replace(/\D/g, "").length < 10) {
          setPhoneError("Enter a valid phone number");
        }
        break;
      case "message":
        setIsMessageTouched(true);
        if (message.trim() === "") {
          setErrorMessage("Message is required");
        } else if (message.length < 20) {
          setErrorMessage("Message must be at least 20 characters long");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 contact-img rounded-2xl p-3 overflow-hidden">
          <Image
            src="/assets/contact-us-side-image.jpg"
            alt="A man with glasses looking at labtop screen"
            width={690}
            height={690}
            layout="responsive"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 contact-content">
          <div className="content-text w-full mb-8">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white">
              You can reach us anytime via{" "}
              <Link
                href="mailto:csmdtechtalent@sci.cu.edu.eg"
                title="csmdtechtalent@sci.cu.edu.eg"
                className="text-purple-400 hover:text-purple-300"
              >
                csmdtechtalent@sci.cu.edu.eg
              </Link>
            </p>
          </div>
          <div className="content-form w-full">
            <form className="space-y-4">
              <TextInputLight
                label="Name"
                placeholder="Your Name"
                id="name"
                name="name"
                required={true}
                error=""
                onChange={(e) => handleNameChange(e)}
                onBlur={() => handleBlur("name")}
                value={name}
              />
              {nameError && (
                <span className="text-red-500 ml-2">{nameError}</span>
              )}
              <TextInputLight
                label="Email"
                placeholder="you@company.com"
                id="email"
                name="email"
                required={true}
                error=""
                type="email"
                onChange={(e) => handleEmailChange(e)}
                onBlur={() => handleBlur("email")}
                value={email}
              />
              {emailError && (
                <span className="text-red-500 ml-2">{emailError}</span>
              )}
              <PhoneInputField
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                id="phone"
                name="phone"
                error={isPhoneTouched && phone ? phoneError : ""}
                onChange={(e) => handlePhoneChange(e)}
                onBlur={() => handleBlur("phone")}
                value={phone}
                defaultCountry="eg"
              />
              <div className="w-full px-2 my-4">
                <label
                  className="block mb-2 text-lg font-medium text-white"
                  htmlFor="message"
                >
                  How Can We Help? <span className="text-purple-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  className="w-full p-2 bg-neutral-100 text-black rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us a little about the project ..."
                  title="How can we help?"
                  onChange={(e) => handleMessageChange(e)}
                  onBlur={() => handleBlur("message")}
                ></textarea>
                {errorMessage && (
                  <span className="text-red-500 ml-2">{errorMessage}</span>
                )}
              </div>
              <div className="w-full px-2 mt-6">
                <button
                  type="submit"
                  onClick={(e) => handleClickSubmit(e)}
                  className="py-3 px-6 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 w-full"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
