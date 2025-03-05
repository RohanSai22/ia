import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Lookup from "@/data/Lookup";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { UserDetailContext } from "@/context/UserDetailContext";
import axios from "axios";
import { useMutation } from "convex/react";
import uuid4 from "uuid4";
import { api } from "@/convex/_generated/api";

function SignInDialogue({ openDialog, closeDialog }) {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
      );

      console.log(userInfo);
      const user = userInfo.data;

      await CreateUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
        uid: uuid4(),
      });

      if (typeof window !== undefined) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      setUserDetail(userInfo?.data);

      //Save the User DataBase to save all our data
      closeDialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="p-6 sm:p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-4xl font-extrabold text-center">
            {Lookup.SIGNIN_HEADING}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg text-center">{Lookup.SIGNIN_SUBHEADING}</p>
            <Button
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
              onClick={googleLogin}
            >
              Sign In With Google
            </Button>
            <p className="text-sm text-center mt-2">
              {Lookup.SIGNIn_AGREEMENT_TEXT}
            </p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialogue;
