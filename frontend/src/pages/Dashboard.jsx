import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';

const cards = [
  {
    image: '/src/assets/images/gymLord.png',
    heading: 'Active workout heading endpoint',
    subheading: 'Active workout subheading endpoint',
  },
];

const Dashboard = () => {
  const { userData, checkUser } = useAuth();
  const [expandedElement, setExpandedElements] = useState(null);

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser(); // Fetch user data if not already available
    }
  }, [userData, checkUser]);

  const toggleElement = () => {
    setExpandedElements(!expandedElement);
  };

  if (!userData || !userData.username) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }
  console.log(userData);
  return (
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
      <div className="flex flex-row justify-center">
        <h1 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Home
        </h1>
      </div>

      <div className="flex cursor-pointer flex-row justify-center">
        <div className="flex flex-col">
          <h1 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-4 text-center font-cthulhumbus text-2xl font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
            {userData.awards?.title || 'No Title'}
          </h1>
          <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text py-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
            Welcome Dear {userData.fullName || 'No Name'}
          </h1>
        </div>
      </div>

      <h2 className="px-4 font-cthulhumbus">Active workout</h2>

      {cards.map((card, index) => (
        <UICardLarge key={index} image={card.image} heading={card.heading} className="" subheading={card.subheading} />
      ))}

      <br />
      <div className="flex flex-col items-start justify-start">
        Expander Tryout
        <button className="px-4 font-cthulhumbus" onClick={toggleElement}>
          Cult News
        </button>
        {expandedElement && (
          <>
            <p>1 Lorem ipsum dolor sit amet.</p>
            <div className="carousel-item">
              <img className="w-24" src="/src/assets/images/gymLord.png" alt="Pizza" />
            </div>
            <p>2 In dolorum veritatis dolores.</p>
            <div className="carousel-item">
              <img className="mx-2 w-24" src="/src/assets/images/gymLord.png" alt="Pizza" />
            </div>
            <p>3 Odit necessitatibus totam.</p>
            <div className="carousel-item">
              <img className="mx-2 w-24" src="/src/assets/images/gymLord.png" alt="Pizza" />
            </div>
          </>
        )}
      </div>
      <br />

      <h2 className="px-4 py-2 font-cthulhumbus">Cult News</h2>
      <div className="flex flex-col">
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
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
