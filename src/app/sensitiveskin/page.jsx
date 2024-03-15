import Link from "next/link";

export default function SensitiveSkin() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <div className="w-full h-8 bg-slate-600 my-8"></div>
      <section className="flex flex-col w-full h-[65vh] justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="px-10">Dentro del tipo de piel escogido con anterioridad considera que posee una piel SENSIBLE?</p>
          <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
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
      <div  className="flex justify-center items-center my-10">
        <Link
          href="/problems"
          className="bg-[#beb6de] hover:bg-[#362966] rounded-full py-3 px-36"
        >
          Next
        </Link>
      </div>
    </main>
  );
}
