function UICardLarge({ image, heading, subheading }) {
  return (
    <>
      <div className="w-48 cursor-pointer rounded-lg p-2 mx-2 transition-transform lg:card-side">
        <div className="flex w-auto flex-col items-center justify-center">
          {/* Icon / image */}
          <div className="flex w-auto flex-col items-center justify-center">
              {/* Heading */}
          <h2 className="py-1 mt-0 text-nowrap cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text font-cthulhumbus text-sm font-medium leading-tight text-transparent sm:text-2xl md:text-lg">{heading}</h2>
            <img src={image} alt="" className="mx-auto w-36 p-2 rounded-xl" />
          </div>
          <div className="">
            <div className="flex flex-col items-center">


              {/* Subheading */}
              <p className="py-1 font-thin text-sm flex items-center">{subheading}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UICardLarge;
