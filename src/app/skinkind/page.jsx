/* eslint-disable @next/next/no-img-element */
import SkinKind from "../components/buttons/SkinKind";
import BackButton from "../components/buttons/BackButton";
import NextButton from "../components/buttons/NextButton";
import SideCard from "../components/SideCard";
import { HelpSideCardProvider } from "../components/contex/helpSideCard";

export default function skinKind() {
  return (
    <main className="w-full h-[100vh] flex flex-col relative">
      <BackButton url={"/about"}></BackButton>
      <div className="my-2 text-center font-normal text-lg">
        <p className="text-center font-semibold text-[#4e4c57]">
          Escoge tu tipo de piel
        </p>
      </div>
      <HelpSideCardProvider>
        <section className="flex flex-col w-full h-[75vh] justify-center items-center py-14">
          <SkinKind></SkinKind>
        </section>
        <NextButton url={"/sensitiveskin"}></NextButton>

        <SideCard></SideCard>
      </HelpSideCardProvider>
    </main>
  );
}
