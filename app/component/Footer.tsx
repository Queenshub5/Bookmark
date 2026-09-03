import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#252B46] w-full py-10 md:py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20">
          {/* Logo Group wrapper */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            <div className="flex justify-center">
              <Image
                src="/images/logo-bookmark.svg"
                alt="Bookmark Logo"
                width={120}
                height={30}
                className="bg-white p-1 rounded-sm"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row items-center text-sm gap-6 md:gap-9 tracking-widest">
              <Link
                href="/"
                className="text-white hover:text-[#FA5757] transition-colors"
              >
                FEATURES
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-[#FA5757] transition-colors"
              >
                PRICING
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#FA5757] transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Social Media Media Icons */}
          <div className="flex items-center gap-10">
             <Image
                src="/images/icon-facebook.svg"
                alt="Facebook icon"
                width={24}
                height={24}
              />
         
              <Image
                src="/images/icon-twitter.svg"
                alt="Twitter icon"
                width={24}
                height={24}
              />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
