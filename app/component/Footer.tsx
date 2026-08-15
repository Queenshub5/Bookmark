import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { luFacebook, luTwitter } from "react-icons/lu";

function Footer() {
  return (
    <div className="bg-[#252B46] h-15 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-20 pt-6">
          <div className="pl-20 rounded-md">
          <Image
            src="/images/logo-bookmark.svg"
            alt=""
            width={100}
            height={100}
            className="bg-white"
          />
          </div>
          <div className="flex items-center text-[14px] gap-9">
            <Link href="/" className="text-white hover:text-[#FA5757]">
              {" "}
              FEATURES
            </Link>
            <Link href="/pricing" className="text-white hover:text-[#FA5757]">
              PRICING
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FA5757]">
              CONTACT
            </Link>
          </div>

          <div className="flex pr-6 gap-10">
            <Image
              src="/images/icon-facebook.svg"
              alt="facebook"
              width={20}
              height={20}
              className="text-white hover:text-[#FA5757]"
            />

            <Image
              src="/images/icon-twitter.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
