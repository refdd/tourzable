import Link from "next/link";
import React from "react";

function PaymentServis() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex justify-center items-center">
        <Link href={"https://new.tourzable.com/payment-request/1"}>
          <div className=" py-3 px-7 bg-mainColor rounded-md">
            <button className="text-white text-lg font-medium font-sans ca">
              Pay Now{" "}
            </button>
          </div>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default PaymentServis;
