/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Problems() {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <div className="w-full h-8 bg-slate-600 my-8"></div>
      <div className="my-5">
        <p className="text-center">Escoja las problematicas que presenta su piel</p>
      </div>
      <section className="flex flex-col gap-7">
        <div className=" flex flex-row gap-5 justify-center items-center">
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/acne-inflamado.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/acne.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/arruga.png" alt="piel normal" />
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

        <div className=" flex flex-row gap-5 justify-center items-center">
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/cicatriz.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/deshidratacion.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/deshidratacion.png" alt="piel normal" />
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
        <div className=" flex flex-row gap-5 justify-center items-center">
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/puntos-negros.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/hiperpigmentacion.png" alt="piel normal" />
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
          <div>
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_4px_20px_-3px_rgba(163,161,163,1)] ">
              <img src="/icons/ojeras.png" alt="piel normal" />
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
      </section>
      <div className="flex flex-row justify-center items-center my-10">
        <Link
          href="/routine"
          className="bg-[#beb6de] hover:bg-[#362966] w-full rounded-full py-3  text-center"
        >
          Crear Rutina
        </Link>
      </div>
    </main>
  );
}
