import Link from "next/link";

export default function Home() {
  return (
    <main className="px-20 py-10 text-xl">
      {" "}
      <nav className="flex flex-row py-5 rounded-2xl justify-center items-center bg-[#e5e6e7]">
        <div className="flex flex-row gap-[500px]">
          <div className="text-4xl text-[#362966] font-bold z-50">Bubble</div>
          <div className="flex gap-16 text-base">
            <button className="hover:-translate-y-2 hover:text-[#beb6de]">
              Features
            </button>
            <button className="hover:-translate-y-2 hover:text-[#beb6de]">
              Screenshots
            </button>
            <button className="hover:-translate-y-2 hover:text-[#beb6de]">
              Blog
            </button>
            <button className="hover:-translate-y-2 hover:text-[#beb6de]">
              Contact
            </button>
            <button className="bg-[#beb6de] py-3 px-5 rounded-3xl hover:translate-y-1 shadow-lg">
              Start now
            </button>
          </div>
        </div>
      </nav>
      <section className="flex flex-row py-20 px-10">
        <div className="flex flex-col gap-10 w-[50%]">
          <p className="text-5xl font-bold text-[#362966]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elituibusdam.
          </p>
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              iure blanditiis laboriosam et natus vel eligendi sint magnam?
              Commodi cum dicta necessitatibus est eum at accusamus soluta
              repellendus impedit tempore.
            </p>
            <Link className="text-blue-800" href={""}>
              Find your perfect skincare routine!
            </Link>
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
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </section>
    </main>
  );
}
