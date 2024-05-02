import NavButton from "./NavButton";
import StartButton from "./StartButton";
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
            <StartButton></StartButton>
          </div>
        </div>
      </nav>
    </>
  );
}
