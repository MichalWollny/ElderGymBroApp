import { useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';

//images
import avatarImage5 from '../assets/images/gymLord.png';

const cards = [
  {
    // My total workouts card
    image: '/src/assets/images/gymLord.png', 
    heading: 'Active workout heading endpoint',
    subheading: 'Active workout subheading endpoint',
    // other props...
  },
];



const Dashboard = () => {
  // State to manage expanded/collapsed state of elements
  const [expandedElement, setExpandedElements] = useState(null);

  // Function to toggle expanded elements
  const toggleElement = () => {
    setExpandedElements(!expandedElement);
  };

  return (
    <>
      <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* Title bar*/}
        <div className="flex flex-row justify-center">
          <h1 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Home
          </h1>
        </div>
        
        {/* add endpoints for title and name*/}
        <div className="flex flex-row justify-center cursor-pointer">
          <div className="flex flex-col">
            {/* <h2 className="text-center text-xl font-semibold text-teal-700">-=|</h2> */}
            {/* <h2 className="text-center text-xl font-normal font-cthulhumbus italic text-teal-700">The infamous</h2> */}
            <h1 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-4 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
              Title
            </h1>
            <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
              Username
            </h1>
            {/* <h2 className="text-center text-xl font-semibold text-teal-700">|=-</h2> */}
          </div>
        </div>

        <h2 className='font-cthulhumbus px-4'>Active workout</h2>

        {cards.map((card, index) => (
            <UICardLarge key={index} image={card.image} heading={card.heading} className="" subheading={card.subheading} />
          ))}
        
        <br/>
        <div className='flex flex-col justify-start items-start'>Expander Tryout
          {/* Button to toggle the element */}
          <button className='font-cthulhumbus px-4' onClick={toggleElement}>Cult News</button>
          {expandedElement && (
            // INHALT start
            <>
              <p>1 Lorem ipsum dolor sit amet.</p>
              <div className="carousel-item">
                <img className="w-24 " src="/src/assets/images/gymLord.png" alt="Pizza" />
              </div>
              <p>2 In dolorum veritatis dolores.</p>
                <div className="carousel-item">
                  <img className="w-24 mx-2" src="/src/assets/images/gymLord.png" alt="Pizza" />
                </div>
              <p>3 Odit necessitatibus totam.</p>
                <div className="carousel-item">
                    <img className="w-24 mx-2" src="/src/assets/images/gymLord.png" alt="Pizza" />
                </div>
            </>
            // INHALT end
          )}
        </div>
        <br/>

      {/* <h2 className='font-cthulhumbus px-4'>Cult News</h2> */}

      {/* <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div className='flex flex-col p-2'>
          <h2 className='text-md py-2'>newsItemHeading</h2>
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full" />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full" />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div> */}

      {/* <h2 className='font-cthulhumbus px-4'>Cult News</h2>
      
      <div className='flex flex-col'>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box" />
        </div>

    </div>
      <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
    <br/> */}

    <h2 className='font-cthulhumbus px-4 py-2'>Cult News</h2>
    <div className='flex flex-col'>
      <div className="carousel carousel-center w-full">

        <div id="item1" className="carousel-item">
          <img className="w-40" src="/src/assets/images/gymLord.png" alt="Pizza" />
        </div>

        <div id="item2" className="carousel-item">
          <img className="w-40" src="/src/assets/images/gymLord.png" alt="Pizza" />
        </div>

        <div id="item3" className="carousel-item">
          <img className="w-40" src="/src/assets/images/gymLord.png" alt="Pizza" />
        </div>

        <div id="item4" className="carousel-item">
          <img className="w-40" src="/src/assets/images/gymLord.png" alt="Pizza" />
        </div>

      </div>

      <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>

    <br/>

      </div>
    </>
  );
};

export default Dashboard;
