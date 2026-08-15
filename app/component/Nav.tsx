import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center px-4 py-10 w-[90%] mx-auto">
        <Image
          src="/images/logo-bookmark.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex gap-10 items-center">
          <Link href="/" className="text-[#252B46] hover:text-[#FA5757]">
            {" "}
            FEATURES
          </Link>
          <Link href="/pricing" className="text-[#252B46] hover:text-[#FA5757]">
            PRICING
          </Link>
          <Link href="/contact" className="text-[#252B46] hover:text-[#FA5757]">
            CONTACT
          </Link>

          <button className="bg-[#FA5757] font-semibold px-8 rounded-sm text-[14px] text-white py-2">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
