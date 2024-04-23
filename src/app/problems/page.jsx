/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SkinProblems from "../components/buttons/SkinProblems";
import BackButton from "../components/buttons/BackButton";
import NextButton from "../components/buttons/NextButton";

export default function Problems() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <BackButton url={"/sensitiveskin"}></BackButton>
      <section className="text-[#4e4c57]">
        <div className="mx-4 my-4">
          <p className="text-center font-semibold">
            Which kind of skin problems do you have?
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full h-[72vh]">
        <SkinProblems></SkinProblems>
      </section>

      <NextButton url={"/routine"}></NextButton>
    </main>
  );
}
