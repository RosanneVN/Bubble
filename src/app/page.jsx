import Nav from "./components/landing/Nav";
import StartButton from "./components/landing/StartButton";

export default function Home() {
  return (
    <main className="px-20 py-10 text-xl flex flex-col text-gray-500 xl:gap-52 md:gap-40 sm:gap-20 2xl:gap-60">
      <div>
        <Nav></Nav>
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

              <button className="bg-[#beb6de] py-3 px-10 rounded-3xl hover:translate-y-1 w-fit shadow-lg text-base">
                Start now
              </button>
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
            className="w-[450px] h-[500px]"
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
      <section className="relative">
        <div className="absolute -top-11 -left-8">
          <img className="h-20 w-20" src="icons/advertencia.png" alt="" />
        </div>
        <div className="bg-[#e5e6e7] rounded-2xl py-10 px-5">
          <p className="font-bold text-[#362966] text-center text-2xl">
            We are not a doctor
          </p>
          <p className="pt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae,
            reprehenderit odit et facere in consequuntur laboriosam magni enim
            expedita quasi, quaerat quo, cum alias inventore culpa dolorum
            doloremque autem ipsum dolor, sit amet consectetur adipisicing elit.
            Vel quae, reprehenderit odit et facere in consequuntur laboriosam
            magni enim expedita quasi, quaerat quo, cum alias inventore culpa
            dolorum doloremque autem!
          </p>
        </div>
      </section>
      
    </main>
  );
}
