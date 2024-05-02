export default function DangerBanner() {
  return (
    <>
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
    </>
  );
}
