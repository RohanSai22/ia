"use client";
import { HelpCircle, LogOut, Wallet } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useSidebar } from "../ui/sidebar";

function SideBarFooter() {
  const router = useRouter();
  const { toggleSidebar, sidebarOpen } = useSidebar();
  const handleSignOut = () => {
    // Remove the user from local storage to sign out.
    localStorage.removeItem("user");
    // Instantly Signs you out ...
    window.location.href = "/";
  };
  const options = [
    {
      name: "Help",
      icon: HelpCircle,
      path: "/help",
    },
    {
      name: "My Subscription",
      icon: Wallet,
      path: "/pricing",
    },
    {
      name: "Sign Out",
      icon: LogOut,
      action: "signOut",
      path: "/",
    },
  ];

  const onOptionClick = (option) => {
    if (option.action === "signOut") {
      handleSignOut();
    } else if (option.path) {
      router.push(option.path);
    }
  };
  return (
    <div className="p-2 mb-10">
      {options.map((option, index) => (
        <Button
          onClick={() => onOptionClick(option)}
          variant="ghost"
          className="w-full flex justify-start my-3"
          key={index}
        >
          <option.icon />
          {option.name}
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
