import InfoPaymentTour from "@/components/checkout/InfoPaymentTour";
import OrderTour from "@/components/checkout/OrderTour";
import PaymentServis from "@/components/hleper/PaymentServis";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";

function Payment({ settings, prices }) {
  const [urlData, setUrlData] = useState();
  const [aduits, setAduits] = useState();
  const [childs, setChilds] = useState();
  const [discount, setdiscount] = useState();
  const [isloding, setIsloding] = useState(false);
  const { pricesPayment } = useStateContext();
  const router = useRouter();
  const { query } = router;
  console.log(settings.PAYMENT_GATWAY);
  useEffect(() => {
    if (query.aduits) {
      setAduits(parseInt(query.aduits));
      setChilds(parseInt(query.childs));
      setdiscount(parseInt(query.discount));
    }
    return;
  }, [query.aduits, aduits]);

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
            {settings.PAYMENT_GATWAY == "HYPERPAY" ? (
              <div>
                <form
                  action="{shopperResultUrl}"
                  className="paymentWidgets"
                  data-brands="VISA"
                ></form>
              </div>
            ) : (
              <PaymentServis />
            )}
          </div>

          <InfoPaymentTour
            prices={prices}
            infant={0}
            childs={childs}
            aduits={aduits}
            cobone={433563}
            discount={discount}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Payment;
export async function getServerSideProps({ params, locale, query, res }) {
  const settings = await fetchApi(`${baseUrl}/settings`);
  const prices = await fetchApi(
    `${baseUrl}/get_booking_prices?adult=${query.aduits}&kid=${
      query.childs
    }&infant=${0}&package_id=${query.idPackage}`
  );
  return {
    props: {
      settings: settings,
      prices: prices.data,
    }, // will be passed to the page component as props
  };
}
