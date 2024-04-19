import Link from "next/link";

export default function NextButton({url}){
  return(
    <>
     <section className="flex justify-center items-center">
        <div
          className="flex flex-row justify-center items-center my-6 bg-[#beb6de] hover:bg-[#362966] 
         w-[90%] rounded-full gap-3 py-3"
        >
          <Link href={url} className=" font-semibold text-center">
            Next
          </Link>
          <img className="w-5 h-5" src="/icons/next.png" alt="" />
        </div>
      </section>
    </>
  )  
}