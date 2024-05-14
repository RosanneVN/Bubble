import Link from "next/link";

export default function SocialAppButton({ color, icon, url }) {
  return (
    <>
      <Link
        className={` ${color} rounded-[50%] size-14 flex justify-center items-center hover:w-32 hover:rounded-3xl hover:shadow-lg text-base`}
        href={url}
      >
        <img className="size-7" src={icon} alt="" />
      </Link>
    </>
  );
}