import { redirect } from "next/navigation";

export default async function  Home() {
  setTimeout(() => {
    redirect("./about")
  }, 3000);

  return (
  <main className="bg-[#e5e6e7] h-[100vh] w-full flex justify-center items-center overflow-hidden" >
    <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner backdrop-blur-sm flex justify-center items-center">
          <h1 className="text-3xl text-[#362966] font-bold z-50">Bubble</h1>
        </div>
    </div> 
  </main>
  );
}
