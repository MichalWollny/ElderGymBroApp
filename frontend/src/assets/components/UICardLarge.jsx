function UICardLarge({ image, heading, subheading }) {
  return (
    <>
      <div className="mx-2 w-60 cursor-pointer rounded-lg p-2 transition-transform lg:card-side">
        <div className="flex w-auto flex-col items-center justify-center">
          {/* Icon / image */}
          <div className="flex w-auto flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="mt-0 cursor-default text-nowrap bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-1 font-cthulhumbus text-sm font-medium leading-tight text-transparent sm:text-2xl md:text-lg">
              {heading}
            </h2>
            <img src={image} alt="" className="mx-auto w-48 rounded-xl p-2" />
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              {/* Subheading */}
              <p className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap py-1 text-sm font-thin">
                {subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UICardLarge;
