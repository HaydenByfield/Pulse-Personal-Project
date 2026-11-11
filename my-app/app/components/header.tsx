"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"


export default function header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    function checkUser() {
      const savedUser = localStorage.getItem("lemont_user");

      setUser(savedUser ? JSON.parse(savedUser) : null);
    }

    checkUser();

    window.addEventListener("auth-change", checkUser);
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("auth-change", checkUser);
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  function handleSignOut() {
    localStorage.removeItem("lemont_user");

    setUser(null);

    window.dispatchEvent(new Event("auth-change"));

    router.push("/");
  }
  return (
    <header id="itl-hdr" className=" relative z-50 flex flex1 min-w-0 justify-between items-center font-serif sm:text-sm md:text-md lg:text-lg bg-second h-20 gap-2">
      <div id="restaurant">
        <a className=" text-black ml-4 font-script sm:text-lg md:text-xl lg:text-2xl" href="/">LE-MONTE</a>
        <p></p>
      </div>
      <nav id="navigation" className="text-black hidden md:flex justify-around gap-5 ">
        <Link href="/#story" className="hover:opacity-50">Our Story</Link>
        <Link href="/#menu" className="hover:opacity-50">Menu</Link>
        <Link href="/#experience" className="hover:opacity-50">The Experience</Link>
        <Link href="/#contact" className="hover:opacity-50">Contact Us</Link>
      </nav>

      {isOpen && (
        <div id="dropdown" className=" absolute right-0 top-20 bg-first w-3/8 flex flex-col shadow-lg gap-4 p-5 md:hidden text-black">
          <Link href="/#story" className=" border-b-1">Our Story</Link>
          <Link href="/#menu" className="border-b-1">Menu</Link>
          <Link href="/#experience" className="border-b-1">The Experience</Link>
          <Link href="/#contact" className="border-b-1">Contact Us</Link>
        </div>
      )}
      <div id="" className="flex gap-2">
        <div id="account" className="flex items-center ">
          <img src="/images/mini-profile-icon.png" className=" w-1/4" />
          {user ? (
            <button className=" text-black hover:text-third" onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link href={"/login"} className=" text-black hover:text-third">Sign In</Link>
          )}
        </div>
        <button onClick={() => router.push("/reservation")} className=" flex-1 min-w-0 mr-4 w-30 sm:w-full p-0 md:p-2 bg-third text-white cursor-pointer hover:bg-black"> Request a Table</button>
        <button className="md:hidden text-2xl " onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
    </header>
  )
}