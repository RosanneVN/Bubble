import Link from "next/link";
import Nav from "./components/landing/Nav";

export default function Home() {
  return (
    <main className="px-20 py-10 text-xl">
      <Nav></Nav>
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
