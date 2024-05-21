import Image from "next/image";
import StartButton from "./StartButton";

export default function Hero() {
  return (
    <>
      <section className="flex flex-row max-lg:flex-col pt-20 max-lg:pt-10 px-10 max-lg:px-0 max-lg:gap-5">
        <div className="flex flex-col gap-10 w-[50%] max-lg:w-full justify-center">
          <p className="text-5xl font-bold text-[#362966] max-lg:text-4xl">
            Find your skincare routine. 🔎
          </p>

          <div className="flex flex-col gap-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              iure blanditiis laboriosam et natus vel eligendi sint magnam?
              Commodi cum dicta necessitatibus est eum at accusamus soluta
              repellendus impedit tempore.
            </p>

            <StartButton></StartButton>
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full flex justify-center items-center">
          <Image width={450} height={500} src="/image/michi_dev.jpg" alt="" />
        </div>
      </section>
    </>
  );
}
