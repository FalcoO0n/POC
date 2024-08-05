import React from "react";
import { useState } from "react";
import {
  ClipboardDocumentIcon,
  CubeTransparentIcon,
  Bars3BottomLeftIcon,
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
  InboxStackIcon,
  DocumentMagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  MoonIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";

import { HomeIcon } from "@heroicons/react/20/solid";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ClickUpMenu from "./ClickUpMenu";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", icon: <HomeIcon className="mr-2 size-5" /> },
  {
    label: "Ballooning",
    href: "/plans",
    icon: <CubeTransparentIcon className="mr-2 size-5" />,
  },
  {
    label: "Inspection",
    href: "/Inspection",
    icon: <ClipboardDocumentIcon className="mr-2 size-5" />,
  },
  { label: "SPC", href: "/mappEye", icon: <DocumentMagnifyingGlassIcon className="mr-2 size-5" /> },
  { label: "Configuration", href: "/configuration", icon: <InboxStackIcon className="mr-2 size-5" /> },
];

function SideNav({ items = navItems }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-full ${
        isCollapsed ? "w-[50px]" : "w-[240px]"
      } bg-gray-800 text-white  flex flex-col transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 text-lg font-bold border-b border-gray-700">
        {isCollapsed ? null : (
          <div className="w-full h-12">
            <img
              src="https://kneo.in/wp-content/uploads/2022/07/KNEO-LOGO-NEW-COLOR-CODE.png"
              alt="Vite Logo"
              className="h-full"
            />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white bg-transparent border-none cursor-pointer"
        >
          {isCollapsed ? (
            <Bars3BottomLeftIcon className="size-5" />
          ) : (
            <ChevronDoubleLeftIcon className="size-5" />
          )}
        </button>
      </div>
      <ul className={`flex-grow ${isCollapsed ? "block" : "block"}`}>
        {items.map((item) => (
          <li key={item.label} className="flex items-center p-4 hover:bg-gray-700">
            <Link to={item.href} className="flex items-center">
              {item.icon}
              <span className={`${isCollapsed ? "hidden" : "block"}`}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`p-3 ${
          isCollapsed ? "" : "bg-slate-700 mx-2 mb-2 rounded-lg shadow-2xl"
        } border-t border-gray-700 flex items-center justify-between ${
          isCollapsed ? "w-[50px] justify-center" : "block"
        }`}
      >
        <div className={`w-full h-8 ${isCollapsed ? "hidden" : "block"}`}>
          <img
            src="https://kneo.in/wp-content/uploads/2022/07/KNEO-LOGO-NEW-COLOR-CODE.png"
            alt="Vite Logo"
            className="h-full "
          />
        </div>
        {/* 
       
        */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Cog6ToothIcon className="size-5 hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <StarIcon className="items-center pr-1 size-5" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MoonIcon className="items-center pr-1 size-5" />
              Dark Mode
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
            <DropdownMenuItem>
              <BanknotesIcon className="items-center pr-1 size-5" />
              Upgrade
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <Cog6ToothIcon className="mx-1 size-5" /> */}
      </div>
      {!isCollapsed && <Separator className="w-[90%] mx-auto my-2 opacity-50" />}
      {!isCollapsed && (
        <div className="flex items-center justify-between mx-5 mb-3">
          <div className="flex items-center gap-1">
            <StarIcon className="items-center size-4" />
            <p className="text-sm font-normal">Upgrade</p>
          </div>
          <Separator className="opacity-50" orientation="vertical" />
          <div className="flex items-center gap-1">
            <QuestionMarkCircleIcon className="items-center size-4" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>Help</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border-none shadow-none">
                <ClickUpMenu />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
