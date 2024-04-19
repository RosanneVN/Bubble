import Link from "next/link";
import BackButton from "../components/buttons/BackButton";
import NextButton from "../components/buttons/NextButton";

export default function SensitiveSkin() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <BackButton url={"/skinkind"}></BackButton>

      <section className="flex flex-col w-full h-[80vh] justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="px-10">
            Dentro del tipo de piel escogido con anterioridad considera que
            posee una piel SENSIBLE?
          </p>
          <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
            <img src="/icons/piel-sensible.png" alt="piel grasa" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex  justify-center items-center w-14 h-14 bg-[#beb6de] rounded-full ">
            <p>SI</p>
          </div>
          <div className="flex  justify-center items-center w-14 h-14 bg-[#beb6de] rounded-full ">
            <p>NO</p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <p>Que es el tipo de piel sensible</p>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/windows/32/help.png"
            alt="help"
          />
        </div>
      </section>
      <NextButton url={"/problems"}></NextButton>
    </main>
  );
}
