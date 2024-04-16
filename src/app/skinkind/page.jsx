/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function skinKind() {
  return (
    <main className="w-full h-[100vh] flex flex-col relative">
      <section className="flex flex-row w-full min-h-5 px-5 mt-5  relative">
        <div className="w-6 h-6 absolute top-0">
          <Link href="/about">
            <img src="/icons/atras.png" alt="" />
          </Link>
        </div>
      </section>
      <div className="my-2 text-center font-normal text-lg">
        <p  className="text-center font-semibold text-black">Escoge tu tipo de piel</p>
      </div>
      <section className="flex flex-col w-full h-[75vh] justify-center items-center">
        <div className="flex flex-row py-5 gap-16">
          <div className="h-28 w-24 ">
            <div className="h-24 w-24 p-3 bg-white rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)]">
              <img src="/icons/piel-seca.png" alt="piel seca" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm" >Seca</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>

          <div className="h-28 w-24">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/piel-grasa.png" alt="piel grasa" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p ame="text-sm" >Grasa</p>
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
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/normal.png" alt="piel normal" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm" >Normal</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="h-28 w-24">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/t.png" alt="piel mixta" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm" >Mixta</p>
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
      <section className="flex justify-center items-center">
        <div className="flex flex-row justify-center items-center my-6 bg-[#beb6de] hover:bg-[#362966] 
         w-[90%] rounded-full gap-3 py-3">
          <Link href="/sensitiveskin" className=" font-semibold text-center">
           Next
          </Link>
          <img className="w-5 h-5" src="/icons/next.png" alt="" />
        </div>
      </section>
     
    
    </main>
  );
}
