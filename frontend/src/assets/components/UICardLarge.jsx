function UICardLarge({ image, heading, subheading }) {
  return (
    <>
      <div className="card glass m-2 w-64 cursor-pointer rounded-lg p-2 shadow-xl transition-transform lg:card-side hover:scale-105">
        <div className="flex min-w-36 flex-col items-center justify-center">
          {/* Icon / image */}
          <div className="min-w-36 pt-6">
            <img src={image} alt="" className="mx-auto h-full w-8/12 rounded-xl" />
          </div>
          <div className="card-body">
            <div className="flex flex-col items-center">
              {/* Heading */}
              <h2 className="card-title py-2 font-cthulhumbus font-semibold">{heading}</h2>
              {/* Subheading */}
              <p className="py-1 font-thin">{subheading}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UICardLarge;
