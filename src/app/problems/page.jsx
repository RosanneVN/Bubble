/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Problems() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <section className="flex flex-row w-full min-h-5 px-5 mt-5  relative">
        <div className="w-6 h-6 absolute top-0">
          <Link href="/sensitiveskin">
            <img src="/icons/atras.png" alt="" />
          </Link>
        </div>
      </section>
      <section>
      <div className="mx-4 my-4">
        <p className="text-center font-semibold text-black">
          Which kind of skin problems do you have?
        </p>
      </div>
      </section>
      
      <section className="flex flex-col gap-5">
        <div className=" flex flex-row gap-5 justify-center items-center">
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/acne-inflamado.png" alt="Swollen acne" />
            </div>
            <div className="flex flex-row justify-center  items-center gap-1 my-1">
              <p className="text-sm">Swollen Acne</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/acne.png" alt="acne" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Acne</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/arruga.png" alt="Wrinkles" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Wrinkles</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-row gap-5 justify-center items-center">
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/cicatriz.png" alt="Scars post acne" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Scars post acne</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/poros-dilatados.png" alt="Enlarged pores" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Enlarged pores</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/deshidratacion.png" alt="Deshidratation" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Non hidratation</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-row gap-5 justify-center items-center">
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/puntos-negros.png" alt="Clogged pores" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Clogged pores</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/hiperpigmentacion.png" alt="Dark spots" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Dark spots</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
          </div>
          <div className="max-w-24 max-h-40">
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src="/icons/ojeras.png" alt="Dark circules" />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">Dark circules</p>
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

      <section className="flex flex-row justify-center items-center my-6 ">
        <Link
          href="/routine"
          className="bg-[#beb6de] hover:bg-[#362966] w-[90%] rounded-full py-3 font-semibold text-center"
        >
          Crear Rutina
        </Link>
      </section>
    </main>
  );
}
