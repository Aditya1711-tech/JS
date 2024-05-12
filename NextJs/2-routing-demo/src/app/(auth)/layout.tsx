"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName == link.href;
        const [name, setName] = useState("");
        return (
          <>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Link
              href={link.href}
              className={`${
                isActive ? "text-black font-bold underline" : "text-blue-600"
              } mr-3`}
            >
              {link.name}
            </Link>
          </>
        );
      })}
      {children}
    </>
  );
}
