

function UICardLarge({
  image,
  heading,
  subheading,

}) {

  return (
    <>
      <div className="w-64 card glass lg:card-side m-2 cursor-pointer rounded-lg p-2 shadow-xl transition-transform hover:scale-105">
        <div className="flex min-w-36 flex-col items-center justify-center">
          {/* Icon / image */}
          <div className='min-w-36 pt-6'>
            <img src={image} alt="" className="h-full mx-auto w-8/12 rounded-xl" />
          </div>
          <div className="card-body">
            <div className="flex flex-col items-center">
              {/* Heading */}
              <h2 className="card-title py-2 font-semibold font-cthulhumbus">{heading}</h2>
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


  
