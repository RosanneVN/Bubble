export default function Features() {
  return (
    <>
      <section className="flex flex-col gap-20">
        <p className="font-bold text-[#362966] text-center text-2xl">
          Features
        </p>
        <div className="flex flex-row gap-20">
          <div className="w-[50%] flex flex-col gap-10">
            <p className="text-5xl font-bold text-[#362966]">
              Take charge of your skincare
            </p>
            <p>
              Skin Bliss provides personalized skincare advice and cosmetic
              ingredient insights. Start your conscious skincare routine with
              Skin Bliss today. Learn what your skin needs to be happy and
              healthy.
            </p>
            <button className="bg-[#beb6de] py-3 px-10 rounded-3xl hover:translate-y-1 w-fit shadow-lg text-base">
              Start now
            </button>
          </div>
          <div className="w-[50%] flex flex-col gap-10">
            <div className="flex flex-row gap-5">
              <div>
                <img className="h-14 w-14" src="icons/crema.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-[#362966] text-2xl">
                  Product recommendations
                </p>
                <p>
                  Receive personalized advice based on your unique skin profile
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <img className="h-14 w-14" src="icons/crema.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-[#362966] text-2xl">
                  Product recommendations
                </p>
                <p>
                  Receive personalized advice based on your unique skin profile
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <img className="h-14 w-14" src="icons/crema.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-[#362966] text-2xl">
                  Product recommendations
                </p>
                <p>
                  Receive personalized advice based on your unique skin profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
