import DangerBanner from "./components/landing/DangerBanner";
import Hero from "./components/landing/Hero";
import IAInfo from "./components/landing/IAInfo";
import Nav from "./components/landing/Nav";
import Screenshots from "./components/landing/Screenshots";
import ContactUs from "./components/landing/ContactUs";
import FeaturesSection from "./components/landing/FeaturesSection";

export default function Home() {
  return (
    <main className="px-20 py-10 text-xl flex flex-col text-gray-500 xl:gap-52 md:gap-40 sm:gap-20 2xl:gap-60">
      <div>
        <Nav></Nav>
        <Hero></Hero>
      </div>
      <IAInfo></IAInfo>
      <DangerBanner></DangerBanner>
      <FeaturesSection></FeaturesSection>
      <Screenshots></Screenshots>
      <ContactUs></ContactUs>
    </main>
  );
}
