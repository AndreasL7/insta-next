"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";

const Header = () => {
  const { data: session } = useSession() as { data: Session | null };
  console.log(session);

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href={"/"} className="hidden lg:inline-flex">
          <Image
            src="/Instagram_logo_black.webp"
            alt="logo"
            width={96}
            height={96}
          />
        </Link>
        <Link href={"/"} className="lg:hidden">
          <Image
            src="/800px-Instagram_logo_2016.webp"
            alt="logo"
            width={96}
            height={96}
          />
        </Link>

        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />

        {session ? (
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt={session.user?.name || "User"}
            width={48}
            height={48}
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={() => signOut()}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
