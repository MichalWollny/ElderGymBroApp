// components
import UICard from './UICard';

// images
import startYourJourney from '/src/assets/images/startYourJourney.jpeg';

// icons
import gendermark from '/src/assets/icons/svg/gendermark.svg';
import gymexperience from '/src/assets/icons/svg/gymexperience.svg';
import equipment from '/src/assets/icons/svg/equipment.svg';

const cards = [
  {
    // Gender card
    image: '/src/assets/icons/svg/gendermark.svg',
    heading: 'Gender',
    subheading: 'Confess your cosmic entity',
    // other props...
  },
  {
    // Gym experience card
    image: '/src/assets/icons/svg/gymexperience.svg',
    heading: 'Gym Experience',
    subheading: 'Recite your story of suffering',
    // other props...
  },
  {
    // Grow your muscles card
    // image: '/src/assets/icons/svg/equipment.svg',
    image: '/src/assets/icons/svg/equipment.svg',
    heading: 'Equipment',
    subheading: 'Pick your torture instruments of choice',
    // other props...
  },
];



function StartYourJourney() {
  return (
    <>
    <div className="min-h-svh bg-gradient-to-br from-black to-blue-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row justify-start bg-gray-900">
          {/* icon button container*/}
          <div className="flex flex-row">
            {/* link container*/}
            <div className="flex flex-row justify-center text-teal-100">
              <a href="/" className="m-2 font-semibold text-teal-600">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --1. Page title goes herer --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Start Your Journey
          </h1>
        </div>

        {/* Image bar */}
        <div className="flex flex-row justify-center text-gray-200">   
          <img src={startYourJourney} alt="Landing Page Image" className="m-2 w-64" />
        </div>

        {/* Content bar*/}
        <div className="flex flex-wrap justify-center bg-green-900">
          {/* Gender card*/}
          <div className="flex flex-wrap justify-center">
            <div className="card m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg
                  height="64px"
                  width="64px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#702848">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <style type="text/css"> </style>{' '}
                    <g>
                      {' '}
                      <path
                        className="st0"
                        d="M267.817,171.048c-12.343-12.388-27.371-22.176-44.078-28.53c-7.888,8.766-13.259,19.438-15.502,31.01 c-0.61,3.12-0.976,6.248-1.144,9.361c1.373,0.472,2.716,0.976,4.029,1.548c14.555,6.171,27.051,16.501,35.808,29.515 c7.033,10.405,11.702,22.451,13.274,35.504c0.412,3.257,0.61,6.576,0.61,9.963c0,11.306-2.273,21.956-6.377,31.674 c-5.096,11.985-12.984,22.588-22.886,30.835c-2.105,1.777-4.318,3.426-6.606,4.974c-13.014,8.788-28.546,13.884-45.497,13.884 c-11.275,0-21.909-2.281-31.643-6.378c-14.586-6.171-27.036-16.508-35.824-29.515c-8.758-12.992-13.854-28.561-13.854-45.474 c0-11.298,2.243-21.932,6.362-31.674c5.539-13.075,14.464-24.487,25.678-33.008c-0.214-2.953-0.306-5.905-0.306-8.857 c0-15.165,2.38-29.965,6.912-43.956c-17.348,6.309-32.91,16.34-45.665,29.126c-22.611,22.543-36.648,53.919-36.602,88.37 c-0.045,34.459,13.992,65.835,36.602,88.385c18.827,18.857,43.788,31.696,71.556,35.426v38.952h-57.901v33.55h57.901V512h33.566 v-56.268h57.947v-33.55H196.23v-38.952c27.784-3.73,52.775-16.569,71.587-35.426c6.286-6.286,11.886-13.228,16.752-20.742 c12.587-19.491,19.896-42.781,19.865-67.643c0-5.835-0.412-11.61-1.175-17.24C299.43,214.562,286.583,189.769,267.817,171.048z"></path>{' '}
                      <path
                        className="st0"
                        d="M349.015,0v33.551h51.203l-52.912,52.912c-22.276-16.981-49.052-25.564-75.691-25.54 c-31.903-0.024-64.019,12.22-88.37,36.617c-17.424,17.378-28.622,38.714-33.627,61.12c-0.061,0.274-0.091,0.549-0.168,0.778 c-0.198,0.87-0.366,1.747-0.533,2.579c-0.306,1.617-0.58,3.227-0.839,4.836c-0.168,0.969-0.305,1.984-0.412,2.952 c-0.198,1.473-0.366,2.983-0.488,4.493c-0.076,0.87-0.168,1.748-0.213,2.617c-0.03,0.435-0.061,0.877-0.091,1.343 c-0.077,0.877-0.107,1.777-0.138,2.646c-0.061,1.648-0.107,3.326-0.107,4.974c0,1.274,0.046,2.548,0.077,3.852 c0.061,1.282,0.138,2.548,0.198,3.861l0.198,2.822c0,0.466,0.076,0.938,0.106,1.442c2.686,27.874,14.723,55.124,36.037,76.4 c12.908,12.916,28.012,22.436,44.078,28.516c4.866-5.363,8.834-11.572,11.687-18.255c2.944-7.01,4.623-14.426,4.958-22.077 c-10.908-3.921-21.1-10.23-29.888-19.018c-7.949-7.987-13.899-17.118-17.851-26.914c-2.822-6.92-4.638-14.166-5.432-21.475 c-0.518-4.326-0.64-8.689-0.442-13.014c0.061-1.076,0.137-2.113,0.198-3.158c0.076-0.77,0.137-1.541,0.274-2.319 c0-0.298,0.061-0.595,0.092-0.9c0.076-0.74,0.168-1.51,0.305-2.243c0.168-1.007,0.336-2.052,0.534-3.051 c0.884-4.57,2.151-9.063,3.829-13.427c0.306-0.801,0.61-1.571,0.977-2.38c0.336-0.839,0.701-1.678,1.098-2.517 c0.336-0.839,0.733-1.679,1.175-2.487c0.366-0.831,0.808-1.64,1.282-2.441c2.212-4.104,4.822-8.055,7.812-11.817 c0.61-0.77,1.251-1.54,1.877-2.281c1.388-1.579,2.792-3.12,4.302-4.63c1.876-1.877,3.784-3.624,5.767-5.234 c6.5-5.401,13.624-9.635,21.1-12.648c14.662-5.942,30.804-7.453,46.199-4.463c15.41,2.99,29.995,10.36,41.988,22.344 c7.98,7.987,13.884,17.118,17.836,26.906c5.981,14.662,7.492,30.773,4.501,46.176c-3.021,15.394-10.406,29.988-22.337,41.973 c-2.624,2.616-5.37,5.035-8.223,7.178c0.167,2.952,0.259,5.905,0.259,8.818c0.046,15.036-2.35,29.858-6.942,43.956 c16.707-6.042,32.375-15.769,45.726-29.119c24.366-24.327,36.648-56.443,36.617-88.377c0.03-26.647-8.559-53.377-25.571-75.691 l52.912-52.912v51.226h33.55V0H349.015z"></path>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-semibold">Gender</h2>

                  <p className="py-1 font-thin">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Gym Experience  card*/}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg
                  fill="#702848"
                  height="64px"
                  width="64px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                  viewBox="0 0 496 496"
                  xmlSpace="preserve"
                  stroke="#702848"
                  strokeWidth="4.96">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <g>
                        {' '}
                        <path d="M472,129.125V83.741l9.92-2.208c8.288-1.848,14.08-9.056,14.08-17.544s-5.792-15.696-14.08-17.544L297.168,5.381 c-32.2-7.16-66.128-7.16-98.328,0L14.08,46.445C5.792,48.293,0,55.501,0,63.989s5.792,15.696,14.08,17.544L112,103.301v120.688 c-22.056,0-40,17.944-40,40c0,13.128,6.448,24.704,16.248,32c-9.8,7.296-16.248,18.872-16.248,32s6.448,24.704,16.248,32 c-9.8,7.296-16.248,18.872-16.248,32s6.448,24.704,16.248,32c-9.8,7.296-16.248,18.872-16.248,32c0,22.056,17.944,40,40,40h304 v-16c-13.232,0-24-10.768-24-24s10.768-24,24-24v-16c-13.232,0-24-10.768-24-24s10.768-24,24-24v-16c-13.232,0-24-10.768-24-24 s10.768-24,24-24v-16c-13.232,0-24-10.768-24-24c0-13.232,10.768-24,24-24v-16h-32V103.301l72-16v41.824 c-13.768,3.576-24,15.992-24,30.864v24v8v16h16v-16h8v16h16v-16h8v16h16v-16v-8v-24C496,145.117,485.768,132.701,472,129.125z M88,327.989c0-13.232,10.768-24,24-24h40v48h-40C98.768,351.989,88,341.221,88,327.989z M384.016,479.989H112 c-13.232,0-24-10.768-24-24s10.768-24,24-24h272.016c-5.032,6.688-8.016,15-8.016,24S378.984,473.301,384.016,479.989z M384.016,415.989H112c-13.232,0-24-10.768-24-24s10.768-24,24-24h40v32h18.424L192,385.605l21.576,14.384H232v-32h152.016 c-5.032,6.688-8.016,15-8.016,24S378.984,409.301,384.016,415.989z M168,382.373v-78.384h48v78.384l-24-16L168,382.373z M384.016,351.989H232v-48h152.016c-5.032,6.688-8.016,15-8.016,24S378.984,345.301,384.016,351.989z M384.016,239.989 c-5.032,6.688-8.016,15-8.016,24c0,9,2.984,17.312,8.016,24H112c-13.232,0-24-10.768-24-24c0-13.232,10.768-24,24-24H384.016z M128,191.989v-85.136l70.832,15.744c16.104,3.576,32.648,5.392,49.168,5.392s33.064-1.816,49.168-5.392L368,106.853v85.136h-16 v16h16v16H128v-16h208v-16H128z M293.696,106.973c-29.936,6.656-61.456,6.656-91.392,0L17.552,65.909 C16.648,65.717,16,64.901,16,63.989c0-0.912,0.648-1.728,1.544-1.92l184.76-41.064c14.968-3.328,30.336-5.016,45.696-5.016 s30.728,1.688,45.696,5.016l184.752,41.064c0.904,0.192,1.552,1.008,1.552,1.92c0,0.912-0.648,1.728-1.544,1.92L293.696,106.973z M480,175.989h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V175.989z" />{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-semibold">Gym Experience</h2>

                  <p className="py-1 font-thin">Subheading</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

        <div className="flex flex-wrap justify-center  text-gray-200">


        </div>

        {/* --5. Name this bar */}
        <div className="flex flex-row justify-center"></div>

        {/* Content bar */}
        <div className="flex flex-wrap justify-center">


          <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <UICard 
              key={index} 
              image={card.image}
              heading={card.heading} 
              subheading={card.subheading} />
            ))}
            </div>
          </div>


        {/* --7. Name this bar */}
        <div className="flex flex-row justify-center">
          <div className="mt-6 flex justify-center">
            <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">
              <a href="/whatsyourgoal">Next</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartYourJourney;