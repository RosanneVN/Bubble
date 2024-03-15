import Link from "next/link";

export default function skinKind() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <div className="w-full h-8 bg-slate-600 my-8"></div>
      <div className="my-2 text-center font-normal text-lg">
        <p>Escoge tu tipo de piel</p>
      </div>
      <section className="flex flex-col w-full h-[65vh] justify-center items-center">
        <div className="flex flex-row py-5 gap-16">
          <div className="h-28 w-24 ">
            <div className="h-24 w-24 p-3 bg-white rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)]">
              <img src="/icons/piel-seca.png" alt="piel seca" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p>Seca</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="h-28 w-24">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/piel-grasa.png" alt="piel grasa" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p>Grasa</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
           
          </div>
        </div>
        <div className="flex flex-row py-5  gap-16">
          <div className="h-28 w-24">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/normal.png" alt="piel normal" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p>Normal</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="h-28 w-24">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/t.png" alt="piel mixta" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p>Mixta</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
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
