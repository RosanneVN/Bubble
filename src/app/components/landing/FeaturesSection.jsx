import Features from "./Features";
import StartButton from "./StartButton";

export default function FeaturesSection() {
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
            <StartButton></StartButton>
          </div>
          <div className="w-[50%] flex flex-col gap-10">
            <Features
              icon={"icons/crema.png"}
              title={"Product Recomendations"}
              text={"Skin Bliss provides personalized skincare advice and cosmetic"}
            ></Features>
            <Features
              icon={"icons/crema.png"}
              title={"Product Recomendations"}
              text={
                "Skin Bliss provides personalized skincare advice and cosmetic"
              }
            ></Features>
            <Features
              icon={"icons/crema.png"}
              title={"Product Recomendations"}
              text={
                "Skin Bliss provides personalized skincare advice and cosmetic"
              }
            ></Features>
          </div>
        </div>
      </section>
    </>
  );
}
