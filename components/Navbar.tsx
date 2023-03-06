"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]
const Navbar = () => {
const {systemTheme, theme, setTheme} = useTheme()
console.log('theme>>',systemTheme, theme)
const currentTheme = theme === "system" ? systemTheme : theme
const [navbar,setNavbar]=useState(false)


  return (
    // <header className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">

    <header className="w-full mx-auto px-4 fixed top-0 z-50 shadow dark:bg-slate-800 bg-white dark:border-b dark:border-stone-600">
        <div className="justify-between md:items-center md:flex">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className="text-2xl font-bold">
                    Anish Karthick
                </div>
            </div>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item,idx)=>{
                return <a key={idx}>{item.label}</a>
            })}
            {currentTheme=="dark"?(
                <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl">
                  <RiSunLine size={25} color="black" />
                </button>
            ):(
                <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl">
                  <RiMoonFill size={25} />
                </button>

            )}
            </div>
        </div>
      
    </header>
  )
}

export default Navbar
