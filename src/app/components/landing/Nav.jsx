import NavButton from "./NavButton";
export default function Nav() {
  return (
    <>
      <nav className="flex flex-row py-5 rounded-2xl justify-center items-center bg-[#e5e6e7]">
        <div className="flex flex-row w-full justify-between px-10">
          <div className="text-4xl text-[#362966] font-bold">Bubble</div>
          <div className="flex gap-16 text-base">
            <NavButton buttonName={"Features"}></NavButton>
            <NavButton buttonName={"Screenshots"}></NavButton>
            <NavButton buttonName={"Blog"}></NavButton>
            <NavButton buttonName={"Contact"}></NavButton>
            <button className="bg-[#beb6de] py-3 px-5 rounded-3xl hover:translate-y-1 shadow-lg">
              Start now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
