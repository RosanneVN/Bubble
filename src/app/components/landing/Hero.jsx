import StartButton from "./StartButton";

export default function Hero() {
  return (
    <>
      <section className="flex flex-row pt-20 px-10">
        <div className="flex flex-col gap-10 w-[50%] justify-center">
          <p className="text-5xl font-bold text-[#362966]">
            Find your skincare routine.
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
        <div className="w-[50%] flex justify-center items-center">
          <img
            className="w-[450px] h-[500px] "
            src="/image/michi_dev.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
