import Link from "next/link";

export default function SocialButton({ color, icon, url }) {
  return (
    <>
      <Link
        className={` ${color} rounded-[50%] size-14 flex justify-center items-center`}
        href={url}
      >
        <img className="size-7 hover:size-9" src={icon} alt="" />
      </Link>
    </>
  );
}
