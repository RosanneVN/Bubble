import Image from "next/image";

export default function About() {
  return (
    <main className="w-full h-[100vh] flex ">
      <div>
        <div>
          <img src="/image/michi_dev.jpg" alt="skincare image" className="w-full h-72"/>
        </div>
        <div className="my-12 mx-3" >
          <h1 className="text-3xl text-[#362966] font-bold z-50 text-center ">Bubble</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vel
            autem aperiam. Inventore, cupiditate delectus beatae dolores aliquam
            aperiam necessitatibus reiciendis laudantium dolore unde maxime
            quisquam soluta deserunt molestias. Perspiciatis.
          </p>
        </div>

        <button className="bg-[#beb6de] hover:bg-[#362966] rounded-full py-3 px-36">Start</button>
      </div>
    </main>
  );
}
