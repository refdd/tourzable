import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainHeader from "@/components/mainSections/MainHeader";
import WhyChooseUs from "@/components/mainSections/WhyChooseUs";
import TourRow from "@/components/tour/TourRow ";
import Reviews from "@/components/mainSections/Reviews";
import NextTrip from "@/components/mainSections/NextTrip";
import Subscribe from "@/components/mainSections/Subscribe";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import NotMember from "@/components/mainSections/NotMember";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <WhyChooseUs />
      <TourRow />
      <TourRow />
      <Reviews />
      <NextTrip />
      <Subscribe />
      <DownLoadApp />
      <NotMember />
    </>
  );
}
