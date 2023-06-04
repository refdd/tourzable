import OrderTour from "@/components/checkout/OrderTour";
import PaymentServis from "@/components/hleper/PaymentServis";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";

function Payment() {
  const [urlData, setUrlData] = useState();
  const [isloding, setIsloding] = useState(false);
  const { pricesPayment } = useStateContext();
  const router = useRouter();
  const { aduits, childs } = router.query;
  // console.log(aduits, childs);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://new.tourzable.com/api/hyper_pay_request/1")
        .then((res) => {
          setUrlData(res.data.checkout_url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (urlData) {
      setTimeout(() => {
        setIsloding(true);
      }, 300);
    }
  }, [urlData]);
  // console.log(isloding);
  return (
    <>
      {isloding && (
        <Script
          onLoad={() => {
            console.log("Script has loaded");
          }}
          src={urlData}
        />
      )}
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
            <div>
              <form
                action="{shopperResultUrl}"
                className="paymentWidgets"
                data-brands="VISA"
              ></form>
            </div>
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
