function UIElements() {
  return (
    <>
      <div className="min-h-svh bg-gray-950 text-gray-200">
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

        {/* -- 1. Page title goes here --*/}
        <div className="flex flex-row justify-center">
          <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            -- UI Elements Library --
          </h1>
        </div>

        {/* -- 3. Name this bar */}
        <div className="flex flex-row justify-center bg-red-900">
          {/* -- 4. Add content here-- */}
          <div>HTML Input Types</div>
        </div>

        {/* -- 5. grid-flow-row auto-rows-max -- */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-3 bg-green-900">
          <br />
          <div className="">
            <p className="font-semibold">Input: date (DatePicker)</p>
            <label htmlFor="start">Start date:</label>
            <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: email</p>
            <input type="email" id="email" pattern=".+@example\.com" size="30" required />
            <br />
            <p className="font-semibold">Input: button</p>
            <input className="styled" type="button" value="| I'm a button |" />
            <br />
          </div>

          <div className="">
            <fieldset>
              <legend>Choose your monster&apos;s features:</legend>

              <div>
                <input type="checkbox" id="scales" name="scales" checked />
                <label htmlFor="scales">Scales</label>
              </div>

              <div>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">Horns</label>
              </div>
            </fieldset>
          </div>

          <div className="card glass w-96">
            <p className="font-semibold">Input: color (Color Picker)</p>
            <p>Choose your monster&apos;s colors:</p>
            <div>
              <input type="color" id="head" name="head" value="#e66465" />
              <label htmlFor="head">Head</label>
              <br />
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label htmlFor="body">Body</label>
            </div>
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: file</p>
            <label htmlFor="avatar">Choose a profile picture:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: image</p>
            <input type="image" id="image" alt="Login" src="./src/assets/images/123.png" />
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: text</p>
            <p>Sign in to your account:</p>
            <div>
              <label htmlFor="userId">User ID</label>
              <input type="text" id="userId" name="userId" />
            </div>
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: month</p>
            <label htmlFor="start">Start month:</label>
            <input type="month" id="start" name="start" min="2018-03" value="2018-05" />
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: number (Spinner)</p>
            <label htmlFor="tentacles">Number of tentacles (1-10):</label>
            <input type="number" id="tentacles" name="tentacles" min="1" max="10" />
            <br />
          </div>
          <div className="">
            <p className="font-semibold">Input: password</p>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <br />
            <div>
              <label htmlFor="pass">Password (8 characters minimum):</label>
              <input type="password" id="pass" name="password" minLength="8" required />
            </div>
            <br />
            <p className="font-semibold">Input: range (Slider)</p>
            <input type="submit" value="Sign in" />
          </div>
          <div className="">
            <p className="font-semibold">Input: radio (Choice group)</p>
            <fieldset>
              <legend>Select a maintenance drone:</legend>

              <div>
                <input type="radio" id="huey" name="drone" value="huey" checked />
                <label htmlFor="huey">Huey</label>
              </div>

              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label htmlFor="dewey">Dewey</label>
              </div>

              <div>
                <input type="radio" id="louie" name="drone" value="louie" />
                <label htmlFor="louie">Louie</label>
              </div>
            </fieldset>
          </div>
          <div className="">
            <p className="font-semibold">Input: range (Slider)</p>
            <div>
              <input type="range" id="volume" name="volume" min="0" max="11" />
              <label htmlFor="volume">Volume</label>
            </div>
            <br />
          </div>
          <br />
          <div className="">
            <p className="font-semibold">Input: search</p>
            <div>
              <label htmlFor="site-search">Search the site:</label>
              <input type="search" id="site-search" name="q" />
              <button>Search</button>
            </div>
            <br />
          </div>
          <br />
          <div className="">
            <p className="font-semibold">Input: search</p>
            <input type="submit" value="Send Request" />
            <br />
          </div>
          <br />
          <div className="">
            <p className="font-semibold">Input: checkbox (DaisyUI toggle switch)</p>
            {/* <!-- DaisyUI toggle --> */}
            <input
              type="checkbox"
              className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
              defaultChecked
            />
          </div>

          <div className="">
            <p className="font-semibold">Input: text</p>
            <label htmlFor="name">Name (4 to 8 characters):</label>
            <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />
          </div>

          <div className="">
            <p className="font-semibold">Input: time</p>
            <label htmlFor="appt">Choose a time for your meeting:</label>
            <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
            <small>Office hours are 9am to 6pm</small>
          </div>
          <br />
          <div className="">
            <p className="font-semibold">Input: URL</p>
            <form>
              <label htmlFor="url">Enter an https:// URL:</label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
                pattern="https://.*"
                size="30"
                required
              />
            </form>
          </div>
          <br />
          <div className="">
            <label htmlFor="camp-week">Choose a week in May or June:</label>
            <input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required />
          </div>
          <br />
        </div>

        {/* flex row */}
        <div className="flex flex-row justify-center bg-purple-900">
          {/* Button */}
          <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white transition-transform hover:scale-110">
            Button
            <a href="/uielements">Next</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default UIElements;
