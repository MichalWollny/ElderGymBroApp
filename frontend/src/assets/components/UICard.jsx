function UICard({ image, heading, subheading }) {
  return (
    <>
      <div className="m-2 cursor-pointer rounded-lg p-2 shadow-xl transition-transform hover:scale-105">
        <a className="">
          <div className="flex flex-col items-center">
            <div className="text-center font-cthulhumbus text-xs font-normal text-slate-300 md:block">{heading}</div>
            {/* <div className="pt-2 text-center text-sm font-normal text-base-content/75 md:block">{subheading}</div> */}
            <div className="m-2 min-w-6">
              <img src={image} alt="" className="mx-auto h-max" />
            </div>
            <div className="text-center text-xs font-normal text-slate-300 md:block">{subheading}</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default UICard;
