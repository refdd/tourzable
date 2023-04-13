import OrderForm from "@/components/checkout/OrderForm";
import OrderTour from "@/components/checkout/OrderTour";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import React from "react";

function Checkout() {
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
        <OrderTour />
        <OrderForm />
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
