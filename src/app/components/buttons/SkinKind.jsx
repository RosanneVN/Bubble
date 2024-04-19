import skins from "../../data/skins";
export default function SkinKind() {
  return (
    <>
      <ul className="grid grid-cols-2 grid-flow-row justify-center items-center gap-4 w-full h-[75vh]">
        {skins.map((skin) => (
          <li key={skin.name} className="flex flex-row justify-center items-center">
            <div className=" h-32 w-24 "> 
            <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
              <img src={skin.img} alt={skin.name} />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 my-1">
              <p className="text-sm">{skin.name}</p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/windows/32/help.png"
                alt="help"
              />
            </div>
            </div>
            
          </li>
        ))}
      </ul>
    </>
  );
}
