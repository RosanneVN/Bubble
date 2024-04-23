import Link from "next/link";

export default function ProductCards() {
  return (
    <>
      {" "}
      <section className="flex flex-col w-full h-72 justify-center items-center gap-4 text-[#4e4c57]">
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
              <p className="text-sm text-[#4e4c57]">Marca del producto</p>
              <p className="text-sm text-[#4e4c57]">Nombre del producto</p>
            </div>
            <div className="flex flex-row  items-center gap-24">
              <p className="text-sm text-[#4e4c57]">Precio: $48</p>
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
    </>
  );
}
