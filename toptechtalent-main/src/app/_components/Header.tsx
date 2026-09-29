"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { HeaderMenu } from "@/lib/types";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  // On scroll make the header sticky
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // Make the header sticky on scroll
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (!header) return;
      // set a css variable with header height
      header.style.setProperty("--header-height", `${header.offsetHeight}px`);
    });
  }, []);

  return (
    <header
      className={`${
        sticky ? "bg-white shadow" : " bg-transparent"
      } fixed top-0 w-full p-0 m-0 z-100 transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full py-3">
        <Suspense fallback={<></>}>
          <MobileDrawer
            menuClass={`${
              sticky ? "text-black fill-black" : "text-white fill-white"
            }`}
          />
        </Suspense>
        <div className="logo-wrapper w-28 md:w-auto px-4">
          <Link href={"/"}>
            {sticky ? (
              <Image
                src="/assets/logo-multi.png"
                alt="TopTech Talent"
                width={190}
                height={66}
                className="p-0 block m-0"
              />
            ) : (
              <Image
                src="/assets/logo-white.png"
                alt="TopTech Talent"
                width={190}
                height={66}
                className="p-0 block m-0"
              />
            )}
          </Link>
        </div>
        <div className="menu-wrapper px-4 py-4 hidden xl:block">
          <ul className="flex items-center justify-center gap-8 flex-wrap">
            {HeaderMenu.map((link) => {
              return (
                <li
                  key={link.title}
                  className={`${sticky ? "text-black" : "text-white"}`}
                >
                  <Link
                    href={link?.link}
                    className="menu-link flex items-center justify-center gap-2 group"
                  >
                    <span>{link.title}</span>
                    <ChevronDown className="w-5 h-5 group-hover:-rotate-90 transition-all duration-200" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons-wrapper xl:me-12 px-4">
          <div className="flex items-center justify-end gap-2">
            <div className="search__icon w-10 h-10 flex items-center justify-center">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-7 md:h-7"
              >
                <path
                  d="M32.875 32.875L25.4437 25.4437M29.4583 15.7917C29.4583 23.3396 23.3396 29.4583 15.7917 29.4583C8.24377 29.4583 2.125 23.3396 2.125 15.7917C2.125 8.24377 8.24377 2.125 15.7917 2.125C23.3396 2.125 29.4583 8.24377 29.4583 15.7917Z"
                  stroke={sticky ? "#000000" : "#F3F3F3"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button className={`btn ${sticky ? " " : "btn--secondary"}`}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
