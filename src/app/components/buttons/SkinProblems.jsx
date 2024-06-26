import problems from "../../data/problems";
export default function SkinProblems() {
  return (
    <>
      <ul className="grid grid-cols-3 grid-flow-row justify-center items-center gap-2 w-full h-[72vh]">
        {problems.map((problem) => (
          <li>
            <div className="flex flex-row justify-center items-center text-[#4e4c57]">
              <div className="max-w-24 max-h-40">
                <div className="h-24 w-24 p-3 bg-[#ffffff] rounded-lg shadow-[0px_0px_8px_-1px_rgba(190,182,222,1)] ">
                  <img src={problem.img} alt={problem.name} />
                </div>
                <div className="flex flex-row justify-center  items-center gap-1 my-1">
                  <p className="text-sm">{problem.name}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
