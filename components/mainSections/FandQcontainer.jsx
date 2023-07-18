import React, { useEffect, useState } from "react";
import FaQSection from "./FaQSection";
import SingleFandQ from "./SingleFandQ";
const General = [
  {
    id: 1,
    question: "What Does Tourzable.Com Offer?",
    answer:
      "We Are An Online Platform That Offers Tourism Programs In The Kingdom (Through Official Organizers Approved By) The Ministry Of Tourism We Have Different Programs For Everyone, To Make Your Adventure 'Unforgettable'!",
  },
  {
    id: 2,
    question: "Does Tourzable Have Permission To Offer Tour Packages?",
    answer: "We Currently Only Provide Services Within The Kingdom",
  },
  {
    id: 3,
    question: "What Languages Do You Have On The Site?",
    answer: "Arabic, English, Chinese",
  },
  {
    id: 4,
    question: "Do You Have A Support Or Contact Number?",
    answer: "We Are Available 24/7 For Our Clients",
  },
];
const Booking = [
  {
    id: 1,
    question: "How Do I Choose The Itinerary?",
    answer:
      "You Can Choose Your Program Through The 'Book Now' Icon Or Inquire Icon Located At Each Offer, In Easy-To-Follow Steps",
  },
  {
    id: 2,
    question: "Can I Design My Own Tourism Package?",
    answer:
      "Yes, You Can Through The 'Customize Your Trip' Service, And After Filling In The Required Data And Submitting Your Request, You Will Receive Three Different Offers From Service Providers",
  },
  {
    id: 3,
    question:
      "Are The Offers On The Site Intended For Individuals Or Groups Only?",
    answer: "We Have Various Tourist Packages For Individuals And Groups",
  },
  {
    id: 4,
    question: "Where Can I Find My Reservations After Purchase?",
    answer:
      "When You Book And Pay For Any Of The Packages, You Will Receive An Email With All The Details. Furthermore, You Can Find All The Information On Your Page Where You Can See The Details Whether It Is A Flight Or A Requested Quote",
  },
];
const Registration = [
  {
    id: 1,
    question: "How Do I Register?",
    answer:
      "Click The Login Icon At The Bottom Of The Page, Enter Your Information And Password And You Will Receive An Email To Confirm Your Account",
  },
  {
    id: 2,
    question: "Is It Possible To Use Tourzable.Com Without Registration?",
    answer:
      "Yes You Can And Once You Inquire Or Book A Tour Our System Automatically Will Create An Account For You And Send You The Login Data At Your Email      ",
  },
  {
    id: 3,
    question:
      "I Am A Freelance Tour Guide, How Do I Participate In TourZable.Com?",
    answer:
      "We Are Working On This Service Now, Please Provide Us With Your Information And Testimonials At: Info@Tourzable.Com ",
  },
];
const Payments = [
  {
    id: 1,
    question: "What Are The Payment Methods?",
    answer:
      "We Accept All Types Of Online Payments (Visa - MasterCard - Mada) As Well As Online Transfers",
  },
  {
    id: 2,
    question: "Is Value Added Tax Included In The Prices On The Website?",
    answer:
      "Yes, All Flights And Prices Include VAT, And There Are No Hidden Fees",
  },
];
const Terms = [
  {
    id: 1,
    question: "What Are The Terms And Conditions Of The Packages On The Site?",
    answer:
      "Each Round Has Its Own Terms And Conditions, So We Ask That You Read Them Before Making A Payment.",
  },
];
const Requirements = [
  {
    id: 1,
    question:
      "What Are The Documents Required To Obtain A Visa To Enter The Kingdom Of Saudi Arabia?",
    answer: "Please Visit: Https://Visa.Visitsaudi.Com/",
  },
];
function FandQcontainer({ faqs }) {
  const [general, setGeneral] = useState([]);
  const [booking, setBooking] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [payments, setPayments] = useState([]);
  const [terms, setTerms] = useState([]);
  const [pequirements, setRequirements] = useState([]);
  useEffect(() => {
    const generalData = faqs?.filter((item) => item?.category == null);
    setGeneral(generalData);
    const bookingData = faqs?.filter((item) => item?.category == "Booking");
    setBooking(bookingData);
    const registrationData = faqs?.filter(
      (item) => item?.category == "Registration"
    );
    setRegistration(registrationData);
    const paymentsData = faqs?.filter((item) => item?.category == "Payments");
    setPayments(paymentsData);
    const termsData = faqs?.filter(
      (item) => item?.category == "Terms&Conditions"
    );
    setTerms(termsData);
    const requirementsData = faqs?.filter(
      (item) => item?.category == "Travel_Requirements"
    );
    setRequirements(requirementsData);
  }, []);
  console.log(general);
  return (
    <div className="container mx-auto px-4 mt-10 col-span-7">
      <div className=" grid grid-cols-1 gap-8">
        <div id="General" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            General
          </p>
          <SingleFandQ questions={general} />
        </div>
        <div id="Booking" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            Booking
          </p>
          <SingleFandQ questions={booking} />
        </div>
        <div id="Registration" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            Registration
          </p>
          <SingleFandQ questions={registration} />
        </div>
        <div id="Payments" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            Payments
          </p>
          <SingleFandQ questions={payments} />
        </div>
        <div id="Terms" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            Terms & Conditions
          </p>
          <SingleFandQ questions={terms} />
        </div>
        <div id="Requirements" className="flex flex-col space-y-3">
          <p className="text-lg text-mainColor font-sans font-medium capitalize">
            Travel Requirements
          </p>
          <SingleFandQ questions={pequirements} />
        </div>
      </div>
    </div>
  );
}

export default FandQcontainer;
