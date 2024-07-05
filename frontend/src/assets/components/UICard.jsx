function UICard({ image, heading, subheading }) {
  return (
    <>
      <div className="m-2 cursor-pointer rounded-lg bg-zinc-800 p-2 shadow-xl transition-transform hover:scale-105">
        <a className="">
          <div className="m-2 min-w-6">
            <img src={image} alt="" className="mx-auto h-full w-1/2 rounded-xl" />
          </div>
          <div className="flex flex-col items-center">
            <div className="pt-2 text-center font-cthulhumbus text-sm font-normal text-slate-300 md:block">
              {heading}
            </div>
            <div className="pt-2 text-center text-sm font-normal text-base-content/75 md:block">{subheading}</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default UICard;
