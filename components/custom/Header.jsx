import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useSidebar } from "../ui/sidebar";
import Link from "next/link";
import { LucideDownload } from "lucide-react";
import { usePathname } from "next/navigation";
import { ActionContext } from "@/context/ActionContext";

//gap-4 is used try using gap-5 as well
function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const path = usePathname();
  const { action, setAction } = useContext(ActionContext);
  //const { toggleSidebar } = useSidebar();

  const onActionBtn = (action) => {
    setAction({
      actionType: action,
      timeStamp: Date.now(),
    });
  };

  return (
    //Unable to give userDetail.name since schema is not defined yet ig
    //temporarily can i give just userDetail ? but if i use that iam getting to display them for a few seconds
    //displaying them even for a few seconds is a newsense so how to rectify it , lets see !
    <div className="p-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/Ia.svg"} alt="Logo" width={40} height={40}></Image>
      </Link>
      {!userDetail?.name ? (
        <div className="flex gap-5">
          <Button variant="ghost">Sign In</Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: Colors.BLUE,
            }}
          >
            Get Started
          </Button>
        </div>
      ) : (
        path?.includes("workspace") && (
          <div className="flex gap-5 items-center justify-center">
            <Button variant="ghost" onClick={() => onActionBtn("export")}>
              <LucideDownload />
              Export
            </Button>
            <Button
              onClick={() => onActionBtn("deploy")}
              className="text-white hover:bg-blue-600"
              style={{
                backgroundColor: Colors.BLUE,
              }}
            >
              Deploy
            </Button>
            {userDetail && (
              <Image
                className="rounded-full"
                src={userDetail?.picture}
                alt="User"
                width={40}
                height={40}
              ></Image>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default Header;
