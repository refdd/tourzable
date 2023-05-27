import OrderTour from "@/components/checkout/OrderTour";
import PaymentServis from "@/components/hleper/PaymentServis";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

function Payment() {
  const { pricesPayment } = useStateContext();
  const router = useRouter();
  const { aduits, childs } = router.query;
  console.log(aduits, childs);
  return (
    <>
      <Script
        onLoad={() => {
          console.log("Script has loaded");
        }}
        src="https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=2115C128A03B06FF73F6ED3674EABB8B.uat01-vm-tx03"
      />
      <div>
        <NormailNavBar />
        <div className="pt-28 bg-[#f5f5f5]"></div>
        <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
          <IconBreadcrumbs
            links={[{ name: "Home", slug: "/" }]}
            currentLink={"Checkout"}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-10">
          <div>
            <PaymentServis />
          </div>

          <OrderTour
            prices={pricesPayment}
            infant={0}
            childs={childs}
            aduits={aduits}
            cobone={433563}
            //   handleChangeCobone={handleChangeCodone}
            //   addCobone={addCobone}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Payment;
