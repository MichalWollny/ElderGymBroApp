import '/src/tiles.scss';

import stamina from '/src/assets/images/stamina.png';
import gymLord from '/src/assets/images/gymLord.png';
import ygolonac from '/src/assets/images/ygolonac.png';
import cardioRiot from '/src/assets/images/cardioRiot.png';

function Onboarding() {
  return (
    <>
      {/* Tailwind grid */}
      <div className="relative grid place-content-center place-items-center overflow-hidden bg-gray-950 px-4 pt-40 text-gray-200">
 
        {/* Texts for addressing the user*/}
        <h1 className="font-serif font-bold text-4xl text-purple-400 italic">Cultist,</h1>
        <h1 className="font-serif font-medium italic text-2xl text-emerald-400 ">which dark blessing do you seek??</h1>

        {/* Radio button tiles styled with .SCSS file */}
        <div class="container">
          <div class="radio-tile-group">

            <div class="input-container">
              <input id="drive" class="radio-button" type="radio" name="radio" />
              <div class="radio-tile">
                {/* <div class="icon car-icon">
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </div> */}
                <img src={gymLord} alt="Landing Page Image" className="w-full md:w-1/2" />
                <label for="drive" class="radio-tile-label py-5">Muscle Worship</label>
              </div>
            </div>

            <div class="input-container">
              <input id="walk" class="radio-button" type="radio" name="radio" />
              <div class="radio-tile">
                {/* <div class="icon walk-icon">
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                  </svg>
                </div> */}
                <img src={ygolonac} alt="Landing Page Image" className="w-full md:w-1/2" />
                <label for="walk" class="radio-tile-label py-5">Fat Fight</label>
              </div>
            </div>

            <div class="input-container">
              <input id="bike" class="radio-button" type="radio" name="radio" />
              <div class="radio-tile">
                {/* <div class="icon bike-icon">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
                  </svg>
                </div> */}
                <img src={stamina} alt="Landing Page Image" className="w-full md:w-1/2" />
                <label for="bike" class="radio-tile-label py-5">Stamina Destruction</label>
              </div>
            </div>

            <div class="input-container">
              <input id="fly" class="radio-button" type="radio" name="radio" />
              <div class="radio-tile">
                {/* <div class="icon fly-icon">
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.18 9"/>
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </div> */}
                <img src={cardioRiot} alt="Landing Page Image" className="w-full md:w-1/2" />
              <label for="fly" class="radio-tile-label py-5">Cardio Crusade</label>
            </div>

          </div>
        </div>

      </div>

      <br/>

      {/* Tailwind flex box  */}
      <div  className="relative grid place-content-center place-items-center overflow-hidden bg-gray-950 px-4 py-24 pt-40 text-gray-200">
      
        <div className="card w-96 glass m-6 transition-transform hover:scale-105">
          <figure><img src={gymLord} alt="Landing Page Image" className="w-full" /></figure>
          <div className="card-body">
            <h2 className="card-title">Muscle Worship</h2>
            <p>Text optional</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div> */}
          </div>
        </div>

        <div className="card w-96 glass m-6 transition-transform hover:scale-105">
          <figure><img src={cardioRiot} alt="Landing Page Image" className="w-full" /></figure>
          <div className="card-body">
            <h2 className="card-title">Cardio Riot</h2>
            <p>Text optional</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div> */}
          </div>
        </div>

        <div className="card w-96 glass m-6 transition-transform hover:scale-105">
        <figure><img src={stamina} alt="Landing Page Image" className="w-full" /></figure>
          <div className="card-body">
            <h2 className="card-title">Stamina Destruction</h2>
            <p>Text optional</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div> */}
          </div>
        </div>

        <div className="card w-96 glass m-6 transition-transform hover:scale-105">
          <figure><img src={ygolonac} alt="Landing Page Image" className="w-full" /></figure>
          <div className="card-body">
            <h2 className="card-title">Fat Fight</h2>
            <p>Text optional</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div> */}
          </div>
        </div>

        </div>  
        
      </div>
    </>
  );
}

export default Onboarding;


