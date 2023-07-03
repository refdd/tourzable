import OrderForm from "@/components/checkout/OrderForm";
import OrderTour from "@/components/checkout/OrderTour";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

function Checkout() {
  const router = useRouter();
  const { query } = router;
  const aduitsNumber = parseInt(query.aduits);
  const childsNumber = parseInt(query.childs);
  const best_price = parseInt(query.best_price);
  if (!query.aduits) return;
  const [aduits, setAduits] = useState(aduitsNumber);
  const [childs, setChilds] = useState(childsNumber);
  const [infant, setinfant] = useState(0);
  const [prices, setPrices] = useState(best_price);
  const [cobone, setCodone] = useState();
  const [discount, setDiscount] = useState(0);
  const handleChangeCodone = (event) => {
    setCodone(event.target.value);
  };
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
    if (type == "infant") {
      setinfant(infant + 1);
    }
  };
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
    if (type == "infant" && infant > 0) {
      setinfant(infant - 1);
    }
  };

  useEffect(() => {
    const bookingPrices = async () => {
      try {
        const response = await axios.get(
          `https://new.tourzable.com/api/get_booking_prices?adult=${aduits}&kid=${childs}&infant=${infant}&package_id=${query.idPackage}`
        );
        setPrices(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    bookingPrices();
  }, [infant, childs, aduits]);
  const addCobone = async (data) => {
    await axios
      .get(`https://new.tourzable.com/api/coupons/${data}`)
      .then((response) => {
        console.log(response.data.data);
        console.log(data);
        setDiscount(response.data.data.discount);
      })
      .catch((error) => {
        setDiscount(0);
        console.log(error);
      });
  };
  // console.log(discount);
  return (
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
        <OrderTour
          prices={prices}
          infant={infant}
          childs={childs}
          aduits={aduits}
          cobone={cobone}
          handleChangeCobone={handleChangeCodone}
          addCobone={addCobone}
          discount={discount}
        />
        <OrderForm
          aduits={aduits}
          childs={childs}
          infant={infant}
          idPackage={query.idPackage}
          startDate={query.startDay}
          endDate={query.endDay}
          handleAddCounter={handleAddCounter}
          handleremoveCounter={handleremoveCounter}
          prices={prices}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
