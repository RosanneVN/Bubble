import DangerBanner from "./components/landing/DangerBanner";
import Hero from "./components/landing/Hero";
import IAInfo from "./components/landing/IAInfo";
import Nav from "./components/landing/Nav";
import Screenshots from "./components/landing/Screenshots";
import ContactUs from "./components/landing/ContactUs";
import FeaturesSection from "./components/landing/FeaturesSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="pt-10 text-xl flex flex-col text-gray-500 xl:gap-52 md:gap-40 sm:gap-20 2xl:gap-60 items-center">
      <div className="px-20 max-w-[1440px]">
        <Nav></Nav>
        <Hero></Hero>
      </div>
      <div className="px-20 max-w-[1440px]">
        <IAInfo></IAInfo>
      </div>
      <DangerBanner></DangerBanner>
      <div className="flex flex-col px-20 xl:gap-52 md:gap-40 sm:gap-20 2xl:gap-60 max-w-[1440px]">
        <FeaturesSection></FeaturesSection>
        <Screenshots></Screenshots>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </main>
  );
}
