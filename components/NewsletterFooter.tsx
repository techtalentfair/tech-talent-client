"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link"; 
import ROUTES from "@/constants/routes";

export default function NewsletterFooter() {
  const router = useRouter();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-gray-700">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400">
              Join our newsletter →
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              We’ll send you a nice letter once per week. <br className="hidden sm:block" />
              No spam.
            </p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-80">
              <FaEnvelope className="mt-5 absolute left-4 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className=" mt-5 pl-10 pr-4 py-2 w-full bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <CustomButton
              className="uppercase italic font-bold w-full sm:w-auto"
              variant="secondary"
              onClick={() => router.push(ROUTES.OUR_EVENTS)}
            >
              Subscribe
            </CustomButton>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-gray-400">
          <FooterColumn title="Community Pages" links={[
            { name: "Our Team members", href: ROUTES.ABOUT_US },
            { name: "Press", href: ROUTES.BLOG },
            { name: "News", href: ROUTES.ARTICLE_DETAILS },
            { name: "Contact", href: ROUTES.CONTACT_US }
          ]} />
          
          <FooterColumn title="Resources" links={[
            { name: "Blog", href: ROUTES.BLOG },
            { name: "Newsletter", href: ROUTES.NEWSLETTER },
            { name: "Events", href: ROUTES.OUR_EVENTS },
            { name: "Support", href: ROUTES.PRIVACY_POLICY }
          ]} />
          
          <FooterColumn title="Social" links={[
            { name: "Twitter", href: "https://twitter.com/@scitechtalent" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/scitechtalent/" },
            { name: "Facebook", href: "https://web.facebook.com/profile.php?id=61560302926189" },
            { name: "GitHub", href: "https://github.com" }
          ]} />
          
          <FooterColumn title="Legal" links={[
            { name: "Terms", href: ROUTES.PRIVACY_POLICY },
            { name: "Privacy", href: ROUTES.PRIVACY_POLICY },
            { name: "Contact", href: ROUTES.CONTACT_US }
          ]} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <div className="space-y-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href} target="_blank" rel="noreferrer" className="block px-2 py-1 hover:text-blue-400 transition duration-200">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
