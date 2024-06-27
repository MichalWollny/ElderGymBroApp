
function UICard({
  image,
  heading,
  subheading,

}) {

  return (
    <>
      <div className="glass m-2 cursor-pointer rounded-lg p-2 shadow-xl transition-transform hover:scale-105">
        <a class="">
        <div className='min-w-18 m-4'>
          <img src={image} alt="" className="h-full mx-auto w-1/3 rounded-xl" />
        </div>
          <div class="flex flex-col items-start">
            <span class="text-base-content text-sm font-cthulhumbus md:block">{heading}
            </span>
            <span class="text-base-content/75 text-xs font-normal md:block">{subheading}
            </span>
          </div>
        </a>
      </div>
    </>
  );
}


export default UICard;





