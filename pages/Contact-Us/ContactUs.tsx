import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="container pr-16 pl-16 bg-black justify-space-between">
      <div className="contact-img rounded-xl">
        <Image
          src="/assets/contact.png"
          alt="A man with glasses looking at labtop screen"
          width={500}
          height={300}
        />
      </div>
      <div className="contact-content">
        <div className="content-text">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
          <p>
            You can reach us anytime via{" "}
            <Link
              href={"emailme:csmdtechtalent@sci.cu.edu.eg"}
              title="csmdtechtalent@sci.cu.edu.eg"
              style={{ color: "purple" }}
            />
          </p>
        </div>
        <div className="content-form">
          <form>
            <div className="contact-form-info">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="contact-form-info">
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="contact-form-info">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="phone" placeholder="+1 (555) 000 - 0000" />
            </div>
            <div className="contact-form-info">
              <label htmlFor="textarea">How can we help</label>
              <textarea placeholder="Tell us a little about the project" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
