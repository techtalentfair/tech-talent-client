"use client";
import React from "react";
import Image from "next/image";
import TextInputLight from "@/components/TextInputLight";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="container mx-auto px-4 py-12 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 contact-img rounded-2xl p-3 overflow-hidden">
          <Image
            src="/assets/contact-us-side-image.jpg"
            alt="A man with glasses looking at labtop screen"
            width={690}
            height={690}
            className="rounded-2xl justify-center align-center bg-center bg-cover h-full"
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <TextInputLight
                label="Email"
                placeholder="you@company.com"
                id="email"
                name="email"
                required={true}
                error=""
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextInputLight
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                id="phone"
                name="phone"
                type="tel"
                required={true}
                error=""
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <div className="w-full px-2 my-4">
                <label
                  className="block mb-2 text-lg font-medium text-white"
                  htmlFor="message"
                >
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 bg-neutral-100 text-black rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us a little about the project..."
                  title="How can we help?"
                ></textarea>
              </div>
              <div className="w-full px-2 mt-6">
                <button
                  type="submit"
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
