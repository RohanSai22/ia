"use client";
import PricingModel from "@/components/custom/PricingModel";
import { useSidebar } from "@/components/ui/sidebar";
import { UserDetailContext } from "@/context/UserDetailContext";
import Colors from "@/data/Colors";
import Lookup from "@/data/Lookup";
import Image from "next/image";
import React, { useContext, useState } from "react";

function Pricing() {
  const { userDetail } = useContext(UserDetailContext);
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <div className="mt-10 flex flex-col items-center w-full p-10 md:px-32 lg:px-48">
        <h2 className="font-bold text-5xl">Pricing</h2>
        <p className="text-gray-400 max-w-xl text-center mt-5">
          {Lookup.PRICING_DESC}
        </p>
        <div
          className="mt-7 items-center p-5 border rounded-xl w-full flex justify-between"
          style={{ backgroundColor: Colors.BACKGROUND }}
        >
          <h2 className="text-lg">
            <span className="font-bold text-2xl">{userDetail?.token}</span>{" "}
            Token Left
          </h2>
          <div>
            <h2 className="font-medium">Need More Token?</h2>
            <p>Upgrade Your Plan Below</p>
          </div>
        </div>
        <PricingModel />
      </div>
      {userDetail && (
        <div className="fixed bottom-5 left-5 z-50">
          <Image
            onClick={toggleSidebar}
            className="rounded-full cursor-pointer"
            src={userDetail.picture}
            alt="User"
            width={30}
            height={30}
          />
        </div>
      )}
    </>
  );
}

export default Pricing;
