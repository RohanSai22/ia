import Lookup from "@/data/Lookup";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function PricingModel() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const UpdateToken = useMutation(api.users.UpdateToken);
  const [selectedOption, setSelectedOption] = useState();
  const onPaymentSuccess = async () => {
    const token = userDetail?.token + Number(selectedOption?.value);
    console.log(token);
    await UpdateToken({
      token: token,
      userId: userDetail?._id,
    });
  };
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Lookup.PRICING_OPTIONS.map((pricing, index) => (
        <div key={index} className="border p-7 rounded-xl flex flex-col gap-3">
          <h2 className="font-bold text-2xl">{pricing.name}</h2>
          <h2 className="font-medium text-lg">{pricing.tokens}</h2>
          <p className="text-gray-400">{pricing.desc}</p>

          <h2 className=" mt-6 font-bold text-4xl text-center">
            ${pricing.price}
          </h2>
          {/*<Button>Upgrade to {pricing.name}</Button>*/}
          <PayPalButtons
            onClick={() => {
              setSelectedOption(pricing);
              console.log(pricing.value);
            }}
            disabled={!userDetail}
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: pricing.price,
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={() => onPaymentSuccess()}
            onCancel={() => console.log("The payment was cancelled.")}
          />
        </div>
      ))}
    </div>
  );
}

export default PricingModel;
