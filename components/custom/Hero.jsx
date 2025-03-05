"use client";
import Lookup from "@/data/Lookup";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Link } from "lucide-react";
import Colors from "@/data/Colors";
import { MessagesContext } from "@/context/MessagesContext";
import SignInDialogue from "./SignInDialogue";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

function Hero() {
  const [userInput, setUserInput] = useState();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const [openDialog, setOpenDialog] = useState(false);

  const CreateWorkSpace = useMutation(api.workspace.CreateWorkSpace);

  const router = useRouter();

  const onGenerate = async (input) => {
    if (!userDetail?.name) {
      setOpenDialog(true);
      return;
    }
    if (userDetail?.token < 100) {
      toast("You do not have enough tokens ");
      return;
    }
    const msg = {
      role: "user",
      context: input,
    };
    setMessages(msg);

    const workspaceId = await CreateWorkSpace({
      user: userDetail._id,
      messages: [msg],
    });
    console.log(workspaceId);

    router.push("/workspace/" + workspaceId);
  };
  return (
    <div
      className="flex flex-col items-center justify-center mt-36 xl:mt-52 gap-3"
      suppressHydrationWarning
    >
      <h2 className="font-bold text-4xl bg-gradient-to-r from-orange-400 via-red-500 to-blue-400 bg-clip-text text-transparent animate-shine">
        {Lookup.HERO_HEADING}
      </h2>
      <p className="text-gray-600 font-medium">{Lookup.HERO_DESC}</p>
      <div
        className="p-5 border rounded-xl max-w-2xl w-full mt-3"
        style={{
          backgroundColor: Colors.BACKGROUND,
        }}
      >
        <div className="flex gap-2">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            onChange={(event) => setUserInput(event.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor cursor-pointer"
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>
      <div className="flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            key={index}
            onClick={() => onGenerate(suggestion)}
            className="p-2 px-3 border rounded-full text-sm text-gray-600 hover:text-stone-400 cursor-pointer"
          >
            {suggestion}
          </h2>
        ))}
      </div>
      <SignInDialogue
        openDialog={openDialog}
        closeDialog={(value) => setOpenDialog(value)}
      />
    </div>
  );
}

export default Hero;
