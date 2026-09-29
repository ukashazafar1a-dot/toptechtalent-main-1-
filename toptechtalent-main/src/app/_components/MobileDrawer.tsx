"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { HeaderMenu } from "@/lib/types";
import Link from "next/link";
type props = {
  menuClass?: string;
};

const MobileDrawer = ({ menuClass }: props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block xl:hidden">
      <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
        <SheetTrigger className="px-4" onClick={() => setOpen(!open)}>
          <Menu className={`h-6 w-6 ${menuClass ? menuClass : ""}`} />
        </SheetTrigger>
        <SheetContent className="z-200">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="menu-wrapper px-4 py-4">
            <ul className="flex items-start justify-start flex-col gap-8 flex-wrap">
              <li key="/" className="text-black">
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="menu-link flex items-center justify-center gap-2"
                >
                  <span>Home</span>
                </Link>
              </li>
              {HeaderMenu.map((link) => {
                return (
                  <li key={link.title} className="text-black">
                    <Link
                      href={link?.link}
                      onClick={() => setOpen(false)}
                      className="menu-link flex items-center justify-center gap-2"
                    >
                      <span>{link.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileDrawer;
