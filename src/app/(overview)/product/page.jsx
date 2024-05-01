/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import BackButton from "../../components/buttons/BackButton";
import Details from "../../components/information/Details";
import Ingredients from "../../components/information/Ingredients";
import HowToUse from "../../components/information/HowToUse";
import { useState } from "react";


export default function Product() {
  const [currentComponent, setCurrentComponent] = useState("details");

  const handleClick = (newCurrentComponent) => {
    setCurrentComponent(newCurrentComponent);
  };

  return (
    <main className="w-full h-[100vh] flex flex-col ">
      <section className=" w-full flex justify-center items-center relative h-16">
        <BackButton url={"/routine"}></BackButton>
        <div className=" h-6 absolute left-24 top-7">
          <p className="text-xl font-semibold">Nombre Producto</p>
        </div>
      </section>

      <section className="flex justify-center items-center w-full h-52 ">
        <div className="bg-[#beb6de] justify-center items-center rounded-[50%] h-44 w-44">
          {""}
          <img className=" h-52 w-60 " src="/image/cleaneser.png" alt="" />
        </div>
      </section>
      <section className="text-[#4e4c57]">
        <div className="font-bold text-[13px] flex justify-around my-5 text-gray-400">
          <button onClick={() => handleClick("details")} className={currentComponent === "details" && "text-black"}>DETAILS</button>
          <button onClick={() => handleClick("ingredients")} className={currentComponent === "ingredients" && "text-black"}>
            INGREDIENTS
          </button>
          <button onClick={() => handleClick("howtouse")} className={currentComponent === "howtouse" && "text-black"}>HOW TO USE</button>
        </div>
        {currentComponent === "details" && <Details></Details> }
        {currentComponent === "ingredients" && <Ingredients></Ingredients>}
        {currentComponent === "howtouse" && <HowToUse></HowToUse>}
      </section>

      <section className="flex justify-center items-center">
        <div
          className="flex flex-row justify-center items-center my-7 bg-[#beb6de] hover:bg-[#362966] 
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
