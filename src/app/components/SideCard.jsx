"use client";
import { useContext } from "react";
import { HelpSideCardContext } from "./contex/helpSideCard";

export default function SideCard() {
  const { sideComponent, setSideComponent } = useContext(HelpSideCardContext);
  const handleClick = () => {
    setSideComponent(false);
  };
  return (
    <>
      <section
        className={`h-[100vh] w-full absolute  ${
          !sideComponent
            ? "-bottom-[120vh] bg-transparent"
            : "bottom-0 bg-[#00000023]"
        } transition-all duration-500 rounded-b-lg flex flex-col`}
      >
        <div onClick={() => handleClick()} className={"h-[30%] w-full"}></div>
        <section
          className={`bg-white w-full h-[70%] overflow-y-auto self-end rounded-lg py-5 px-10`}
        >
          <div className=" flex justify-end">
            <button onClick={() => handleClick()}>
              <img width="14" height="14" src="icons/cerrar.png" alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
          <p className="font-semibold">Tipo piel:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eos debitis repellendus provident corrupti inventore accusamus est
            nulla modi possimus obcaecati placeat sit corporis porro, quia
            aspernatur fugit voluptate fuga! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iusto, corporis pariatur aperiam
            debitis atque ipsum alias? Tempora neque similique, laudantium
            facilis ex nesciunt exercitationem quo magnam illum nihil dicta.
            Consequuntur?
          </p>
          </div>
          
        </section>
      </section>
    </>
  );
}
