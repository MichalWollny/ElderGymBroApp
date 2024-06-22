import stamina from '/src/assets/images/stamina.avif';
import gymLord from '/src/assets/images/gymLord.avif';
import ygolonac from '/src/assets/images/ygolonac.avif';
import cardioRiot from '/src/assets/images/cardioRiot.avif';
import codexoftheCult from '/src/assets/images/codexoftheCult.png';
import cthulhuKettlebell from '/src/assets/images/cthulhuKettlebell.png'; 


const containerItems = [
  { id: 'gymLord', imgSrc: gymLord, text: 'Muscle Worship' },
  { id: 'ygolonac', imgSrc: ygolonac, text: 'Fat Fight' },
  { id: 'stamina', imgSrc: stamina, text: 'Stamina Destruction' },
  { id: 'cardioRiot', imgSrc: cardioRiot, text: 'Cardio Crusade' },
];



function SplashScreen() {


  return (
    <>
    <div className="min-h-svh text-gray-200 bg-gray-950">

        {/* window bar */}
        <div className='flex flex-row justify-start bg-gray-900'>

        {/* icon button container*/}
        <div className='flex flex-row'>
          {/* link container*/}
          <div className= 'flex flex-row justify-center text-teal-100'>
            <a href="/" class="m-2 font-semibold text-teal-600">
              {/* icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* --1. Page title goes herer --*/}
      <div className="flex flex-row justify-center">
        <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">Start Your Journey</h1>
      </div>


        {/* Content bar*/}
        <div className='flex flex-row justify-center bg-red-900'>

          <img src={cthulhuKettlebell} alt="Landing Page Image" className="m-2 w-64" />

        </div>

        {/* --5. Name this bar */}
        <div className='flex flex-row justify-center bg-green-900'>

        </div>

        {/* --7. Name this bar */}
        <div className='flex flex-row justify-center bg-blue-900'>
            {/* --8. Add content here-- */}
            <div>Content section 3</div>
        </div>

        {/* --7. Name this bar */}
        <div className='flex flex-row justify-center bg-yellow-900'>
       
        <div className="mt-6 flex justify-center">
            <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
              <a href="/startyourjourney">
              Next</a>
            </button>
          </div>

        </div>

      </div>

    </>
  );
}

export default SplashScreen;