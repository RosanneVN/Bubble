import Link from "next/link";
import BackButton from "../components/buttons/BackButton";

export default function MyRoutine() {
  return (
    <main className="flex flex-col w-full h-[100vh]">
      <BackButton url={"/problems"}></BackButton>
      <section className="flex flex-col w-full"></section>
      <section className="flex flex-col w-full h-[95vh] gap-8 ">
        <p className="text-center">Your routine:</p>
        <section className="flex flex-col w-full h-72 justify-center items-center gap-4">
          <p className="text-sm">Paso 1: Cleaneser</p>
          <div className="flex flex-col w-64 h-64  rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] gap-4 py-5 ">
            <div className="flex flex-col justify-center items-center ">
              <Link href="/product">
                <div className="flex flex-col justify-center items-center bg-[#e5e6e7] rounded-[60%] h-32 w-32 relative ">
                  {" "}
                  <img
                    className=" h-32 w-36 absolute top-2"
                    src="/image/clean.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="mx-3">
              <div className=" flex flex-col ">
                <p className="text-sm text-gray-500">Marca del producto</p>
                <p className="text-sm text-gray-500">Nombre del producto</p>
              </div>
              <div className="flex flex-row  items-center gap-24">
                <p className="text-sm text-gray-500">Precio: $48</p>
                <Link
                  className="flex justify-center items-center w-9 h-9 bg-[#beb6de] rounded-full "
                  href=""
                >
                  <img
                    className="w-6 h-6"
                    src="/icons/bolsa-de-la-compra.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-72 justify-center items-center gap-4">
          <p className="text-sm">Paso 2: Toner</p>
          <div className="flex flex-col w-64 h-64  rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] gap-4 py-5 ">
            <div className="flex flex-col justify-center items-center ">
              <Link href="/product">
                <div className="flex flex-col justify-center items-center bg-[#beb6de] rounded-[50%] h-32 w-32 relative ">
                  {" "}
                  <img
                    className=" h-32 w-36 absolute top-2"
                    src="/image/clean.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className="mx-3">
              <div className=" flex flex-col ">
                <p className="text-sm text-gray-500">Marca del producto</p>
                <p className="text-sm text-gray-500">Nombre del producto</p>
              </div>
              <div className="flex flex-row  items-center gap-24">
                <p className="text-sm text-gray-500">Precio: $48</p>
                <Link
                  className="flex justify-center items-center w-9 h-9 bg-[#beb6de] rounded-full "
                  href=""
                >
                  <img
                    className="w-6 h-6"
                    src="/icons/bolsa-de-la-compra.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-72 justify-center items-center gap-4">
          <p className="text-sm">Paso 3: Serum</p>
          <div className="flex flex-col w-64 h-64  rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] gap-4 py-5 ">
            <div className="flex flex-col justify-center items-center ">
              <Link href="/product">
                <div className="flex flex-col justify-center items-center bg-[#e5e6e7] rounded-[50%] h-32 w-32 relative ">
                  {" "}
                  <img
                    className=" h-32 w-36 absolute top-2"
                    src="/image/clean.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className="mx-4">
              <div className=" flex flex-col ">
                <p className="text-sm text-gray-500">Marca del producto</p>
                <p className="text-sm text-gray-500">Nombre del producto</p>
              </div>
              <div className="flex flex-row  items-center gap-24">
                <p className="text-sm text-gray-500">Precio: $48</p>
                <Link
                  className="flex justify-center items-center w-9 h-9 bg-[#beb6de] rounded-full "
                  href=""
                >
                  <img
                    className="w-6 h-6"
                    src="/icons/bolsa-de-la-compra.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
