"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MessageCircleCode, Menu } from "lucide-react";
import WorkspaceHistory from "./WorkspaceHistory";
import SideBarFooter from "./SideBarFooter";
import Link from "next/link";
import { useSidebar } from "../ui/sidebar";

function AppSideBar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex justify-between items-center">
          <Image src={"/Ia.svg"} alt="Logo" width={30} height={30} />
          {/* Icon to toggle the sidebar */}
          <Button onClick={toggleSidebar} variant="ghost" className="p-2">
            <Menu />
          </Button>
        </div>
        <Link href={"/"}>
          <Button className="mt-5">
            <MessageCircleCode />
            Start New Chat
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-5">
        <SidebarGroup>
          <WorkspaceHistory />
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SideBarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSideBar;
