import Link from "next/link";
export default function BackButton({url}) {
  return (
    <>
     <section className="flex flex-row w-full min-h-5 px-5 mt-5 relative ">
        <div className="w-6 h-6 absolute top-0">
          <Link href={url}>
            <img src="/icons/atras.png" alt="" />
          </Link>
        </div>
      </section>
    </>
  );
}
