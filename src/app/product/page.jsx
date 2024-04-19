/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BackButton from "../components/buttons/BackButton";

export default function Product() {
  return (
    <main className="w-full h-[100vh] flex flex-col ">
      <section className="relative">
      <BackButton url={"/routine"}></BackButton>
      <div className=" h-6 absolute left-32 top-2">
          <p className="text-xl font-semibold">Nombre Producto</p>
        </div>
      </section>
      
      <section className="flex justify-center items-center w-full h-52 ">
        <div className="bg-[#beb6de] justify-center items-center rounded-[50%] h-44 w-44">
          {""}
          <img className=" h-52 w-60 " src="/image/cleaneser.png" alt="" />
        </div>
      </section>
      <section>
        <div className="font-bold text-[13px] flex justify-around my-7 text-gray-500">
          <button>DETAILS</button>
          <button>INGREDIENTS</button>
          <button>HOW TO USE</button>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex flex-row justify-between mx-6">
            <div className="flex flex-row justify-center items-center gap-1">
              <img className="w-4 h-4" src="/icons/estrella.png" alt="" />
              <p>4.8(212 Reviews)</p>
            </div>
            <div>
              <p className="font-bold">$48</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mx-6">
            <p>About the product:</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis at quos adipisci delectus molestiae assumenda veritatis
              labore, incidunt nesciunt. Magnam cupiditate cum, officiis culpa
              consequatur deserunt iste autem odio.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div
          className="flex flex-row justify-center items-center my-6 bg-[#beb6de] hover:bg-[#362966] 
         w-[90%] rounded-full gap-3 py-3"
        >
          <Link href="/product" className="  text-center">
            Ir al producto
          </Link>
          <img className="w-6 h-6" src="/icons/bolsa-de-la-compra.png" alt="" />
        </div>
      </section>
    </main>
  );
}
