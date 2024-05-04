import Link from "next/link";
import SocialButton from "./SocialButton";

export default function ContactUs() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <p className="font-bold text-[#362966] text-center text-2xl">
          Contact Us
        </p>
        <div className="flex flex-row">
          <div className="w-[70%] flex flex-col gap-10 px-20">
            <div className="bg-[#f1f3ff] flex flex-col gap-10 justify-center items-center py-10 px-7 rounded-xl">
              <img
                className="size-20 rounded-[50%]"
                src="image/michi_dev.jpg"
                alt=""
              />
              <div>
                <p className="text-gray-500 font-semibold">Dear User:</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  elit. Asperiores molestiae, nobis nisi voluptatum modi
                  dignissimos iure explicabo repellat amet voluptate at rem
                  reiciendis ut laborum voluptatem. Excepturi vitae
                  exercitationem corrupti.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] rounded-xl w-fit py-10 px-7">
              <p>Dev Information</p>
              <div className="flex flex-row gap-10">
                <SocialButton
                  color={"bg-[#bdcef1]"}
                  icon={"icons/facebook.png"}
                  url={""}
                ></SocialButton>
                <SocialButton
                  color={"bg-[#ffc4ed]"}
                  icon={"icons/facebook.png"}
                  url={""}
                ></SocialButton>
                <SocialButton
                  color={"bg-[#c7f8d0]"}
                  icon={"icons/facebook.png"}
                  url={""}
                ></SocialButton>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-10">
              <SocialButton
                color={"bg-[#bdcef1]"}
                icon={"icons/facebook.png"}
                url={""}
              ></SocialButton>
              <SocialButton
                color={"bg-[#ffc4ed]"}
                icon={"icons/facebook.png"}
                url={""}
              ></SocialButton>
              <SocialButton
                color={"bg-[#c7f8d0]"}
                icon={"icons/facebook.png"}
                url={""}
              ></SocialButton>
            </div>
          </div>
        </div>
        <p className="text-center">text| text| text| text</p>
      </section>
    </>
  );
}
