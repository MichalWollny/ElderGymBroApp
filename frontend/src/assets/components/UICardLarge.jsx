function UICardLarge({ image, heading, subheading }) {
  return (
    <>
      <div className="glass w-48 cursor-pointer rounded-lg p-2 mx-2 shadow-xl transition-transform lg:card-side">
        <div className="flex w-auto flex-col items-center justify-center">
          {/* Icon / image */}
          <div className="">
              {/* Heading */}
          <h2 className="py-1 font-cthulhumbus font-semibold">{heading}</h2>
            <img src={image} alt="" className="mx-auto h-full p-2 rounded-xl" />
          </div>
          <div className="">
            <div className="flex flex-col items-center">


              {/* Subheading */}
              {/* <p className="py-1 font-thin text-sm">{subheading}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UICardLarge;
