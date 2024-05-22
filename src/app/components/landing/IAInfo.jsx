import Image from "next/image";

export default function IAInfo() {
  return (
    <>
      <section className="flex flex-row max-lg:flex-col-reverse px-10 max-lg:px-0 max-lg:gap-10">
        <div className="w-[50%] max-lg:w-full">
          <Image
            width={450}
            height={500}
            src="/image/michi_dev.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col w-[50%] max-lg:w-full gap-10 justify-center">
          <p className="text-5xl font-bold text-[#362966] max-lg:text-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            officiis mollitia iure, illo reprehenderit illum consequatur
            laboriosam nam maxime officiis mollitia iure blanditiis, dignissimos
            deleniti error recusandae officiis mollitia iure, illo reprehenderit
            illum consequatur laboriosam nam maxime omnis quibusdam nostrum rem
            odio eius illo reprehenderit illum consequatur laboriosam nam maxime
            blanditiis, dignissimos deleniti ?
          </p>
        </div>
      </section>
    </>
  );
}
