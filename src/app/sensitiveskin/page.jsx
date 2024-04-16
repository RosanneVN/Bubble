import Link from "next/link";

export default function SensitiveSkin() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <section className="flex flex-row w-full min-h-5 px-5 mt-5  relative">
        <div className="w-6 h-6 absolute top-0">
          <Link href="/skinkind">
            <img src="/icons/atras.png" alt="" />
          </Link>
        </div>
      </section>
      <section className="flex flex-col w-full h-[80vh] justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="px-10">Dentro del tipo de piel escogido con anterioridad considera que posee una piel SENSIBLE?</p>
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
      <section className="flex justify-center items-center">
        <div className="flex flex-row justify-center items-center my-6 bg-[#beb6de] hover:bg-[#362966] 
         w-[90%] rounded-full gap-3 py-3">
          <Link href="/problems" className=" font-semibold text-center">
            Next
          </Link>
          <img className="w-5 h-5" src="/icons/next.png" alt="" />
        </div>
      </section>
    </main>
  );
}
