/* eslint-disable @next/next/no-img-element */

import SideCard from "@/app/components/SideCard";
import BackButton from "@/app/components/buttons/BackButton";
import NextButton from "@/app/components/buttons/NextButton";
import SkinKind from "@/app/components/buttons/SkinKind";
import { HelpSideCardProvider } from "@/app/components/contex/helpSideCard";

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
