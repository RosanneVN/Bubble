export default function Features({ icon, title, text }) {
  return (
    <>
      <div className="flex flex-row gap-5">
        <div>
          <img className="size-14" src={icon} alt="" />
        </div>
        <div>
          <p className="font-bold text-[#362966] text-2xl">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
