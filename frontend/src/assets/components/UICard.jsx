
function UICard({
  image,
  heading,
  subheading,

}) {

  return (
    <>
      <div className="glass m-2 cursor-pointer rounded-lg p-2 shadow-xl transition-transform hover:scale-105">
        <a class="">
        <div className='min-w-6 m-2'>
          <img src={image} alt="" className="h-full mx-auto w-1/4 rounded-xl" />
        </div>
          <div class="flex flex-col items-center">
            <div class="font-bold tracking-tight text-base-content  text-center font-cthulhumbus md:block">{heading}
            </div>
            <div class="text-base-content/75 text-sm pt-2 text-center font-normal md:block">{subheading}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}


export default UICard;





