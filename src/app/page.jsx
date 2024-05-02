import Nav from "./components/landing/Nav";

export default function Home() {
  return (
    <main className="px-20 py-10 text-xl flex flex-col xl:gap-52 md:gap-40 sm:gap-20 2xl:gap-60">
      <div>
        <Nav></Nav>
        <section className="flex flex-row pt-20 px-10">
          <div className="flex flex-col gap-10 w-[50%]">
            <p className="text-5xl font-bold text-[#362966]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elituibusdam.
            </p>
            <div className="flex flex-col gap-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                iure blanditiis laboriosam et natus vel eligendi sint magnam?
                Commodi cum dicta necessitatibus est eum at accusamus soluta
                repellendus impedit tempore.
              </p>
              <p className="text-blue-800">
                Find your perfect skincare routine!
              </p>
              <div className="flex m-auto">
                <button className="bg-[#beb6de] py-3 px-10 rounded-3xl hover:translate-y-1 w-fit shadow-lg text-base">
                  Start now
                </button>
              </div>
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
      </div>
      <section className="flex flex-row px-10">
        <div className="w-[50%]">
          <img
            className="w-[450px] h-[500px] "
            src="/image/michi_dev.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col w-[50%] gap-10 justify-center">
          <p className="text-5xl font-bold text-[#362966]">
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
    </main>
  );
}
