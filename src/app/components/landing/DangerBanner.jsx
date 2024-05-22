export default function DangerBanner() {
  return (
    <>
      <section className="w-full bg-[#e5e6e7] flex justify-center">
        <div className="max-w-[1440px] py-10 px-5 flex flex-row max-lg:flex-col max-lg:gap-5">
          <div className="w-[20%] max-lg:w-full flex justify-center items-center">
            <img className="size-20" src="icons/advertencia.png" alt="" />
          </div>

          <div className="w-[80%] max-lg:w-full">
            <p className="font-bold text-[#362966] text-center text-4xl max-lg:text-3xl">
              We are not a doctor
            </p>
            <p className="pt-5 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              quae, reprehenderit odit et facere in consequuntur laboriosam
              magni enim expedita quasi, quaerat quo, cum alias inventore culpa
              dolorum doloremque autem ipsum dolor, sit amet consectetur
              adipisicing elit. Vel quae, reprehenderit odit et facere in
              consequuntur laboriosam magni enim expedita quasi, quaerat quo,
              cum alias inventore culpa dolorum doloremque autem!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
