"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handlerMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30  py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className=" flex  flex-row-reverse ">
        <button type="button" onClick={handlerMenu}>
          <span className="sr-only">Open Main Menu</span>
          {open === true ? (
            <Image
              src="/krest.png"
              alt="free"
              width={16}
              height={16}
              className="mb-40 inline-block cursor-pointer lg:hidden"
            />
          ) : (
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer  lg:hidden"
            />
          )}
        </button>
        {open ? (
          <div className="w-full lg:hidden">
            <div className=" space-y-1 pb-3 pt-2 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 flex cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
