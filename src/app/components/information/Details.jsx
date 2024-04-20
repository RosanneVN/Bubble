export default function Details() {
  return (
    <>
      <section className="flex flex-col w-full h-[35vh]">
        {" "}
        <div className="flex flex-col gap-3">
          <div className=" flex flex-row justify-between mx-6">
            <div className="flex flex-row justify-center items-center gap-1">
              <img className="w-4 h-4" src="/icons/estrella.png" alt="" />
              <p>4.8(212 Reviews)</p>
            </div>
            <div>
              <p className="font-bold">$48</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mx-6">
            <p>About the product:</p>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis at quos adipisci delectus molestiae assumenda veritatis
              labore, incidunt nesciunt. Magnam cupiditate cum, officiis culpa
              consequatur deserunt iste autem odio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
