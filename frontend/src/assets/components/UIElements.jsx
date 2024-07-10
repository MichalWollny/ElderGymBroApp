import Switch from '@mui/material/Switch';
// import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function UIElements() {
  return (
    <>
      <div className="min-h-svh bg-gray-950 bg-gradient-to-r from-teal-800 to-gray-950 text-gray-200">
        {/* window bar */}
        <div className="flex flex-row">
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

        <div className="flex flex-row justify-center">
          <h2 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text p-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            UI Elements Library
          </h2>
        </div>

        {/* <div className="flex flex-row justify-center bg-red-900">
          <div>HTML Input Types</div>
        </div> */}

        {/* -- 5. grid-flow-row auto-rows-max -- */}
        {/* <div className="grid grid-flow-row auto-rows-max grid-cols-3"> */}
        <div className="flex flex-wrap justify-center">
          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: date (DatePicker)</p>
            <hr />
            <br />
            <label htmlFor="start">Start date:</label>
            <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">MaterialUI responsive Date Picker</p>
            <hr />
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
              <DatePicker label="Basic date picker" />
              <br />
            </LocalizationProvider>
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: email</p>
            <hr />
            <br />
            <input type="email" id="email" pattern=".+@example\.com" size="15" required />
            <br />
            <p className="font-semibold">Input: button</p>
            <input className="styled" type="button" value="| I'm a button |" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: checkbox</p>
            <hr />
            <br />
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

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: color (Color Picker)</p>
            <hr />
            <br />
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

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: file</p>
            <hr />
            <br />
            <label size="15" htmlFor="avatar">
              Choose a profile picture:
            </label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: image</p>
            <hr />
            <br />
            <input className="size-20" type="image" id="image" alt="Login" src="./src/assets/images/landingPage.avif" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: text</p>
            <hr />
            <br />
            <p>Sign in to your account:</p>
            <div>
              <label htmlFor="userId">User ID</label>
              <input type="text" id="userId" name="userId" />
            </div>
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: month</p>
            <hr />
            <br />
            <label htmlFor="start">Start month:</label>
            <input type="month" id="start" name="start" min="2018-03" value="2018-05" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: number (Spinner)</p>
            <hr />
            <br />
            <label htmlFor="tentacles">Number of tentacles (1-10):</label>
            <input type="number" id="tentacles" name="tentacles" min="1" max="10" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: password</p>
            <hr />
            <br />
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

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: radio (Choice group)</p>
            <hr />
            <br />
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
          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: range (Slider)</p>
            <hr />
            <br />
            <div>
              <input type="range" id="volume" name="volume" min="0" max="11" />
              <label htmlFor="volume">Volume</label>
            </div>
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: search</p>
            <hr />
            <br />
            <div>
              <label htmlFor="site-search">Search the site:</label>
              <input type="search" id="site-search" name="q" />
              <button>Search</button>
            </div>
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: search</p>
            <hr />
            <br />
            <input type="submit" value="Send Request" />
            <br />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: checkbox (MaterialUI toggle switch)</p>
            <hr />
            <br />
            {/* <!-- Material toggle --> */}
            <Switch defaultChecked />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: checkbox (DaisyUI toggle switch)</p>
            <hr />
            <br />
            {/* <!-- DaisyUI toggle --> */}
            <input type="checkbox" className="toggle" defaultChecked />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: text</p>
            <hr />
            <br />
            <label htmlFor="name">Name (4 to 8 characters):</label>
            <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: time</p>
            <hr />
            <br />
            <label htmlFor="appt">Choose a time for your meeting:</label>
            <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
            <small>Office hours are 9am to 6pm</small>
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Input: URL</p>
            <hr />
            <br />
            <form>
              <label htmlFor="url">Enter an https:// URL:</label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
                pattern="https://.*"
                size="15"
                required
              />
            </form>
          </div>

          <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
            <p className="font-semibold">Material UI week picker</p>
            <hr />
            <br />
            <label htmlFor="camp-week">Choose a week in May or June:</label>
            <input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required />
          </div>
          <br />

          <>
            {/*<!-- Component: Rounded base sized datepicker with helper text --> */}
            <div className="card glass m-6 w-96 p-6 transition-transform hover:scale-110">
              <p className="font-semibold">Wind UI Datepicker</p>
              <hr />
              <br />
              <input
                id="id-date08"
                type="date"
                name="id-date08"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-date08"
                className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Date
              </label>
              <small className="px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>WindUI date picker</span>
              </small>
            </div>
            {/*<!-- End Rounded base sized datepicker with helper text --> */}
          </>
        </div>

        {/* flex row */}
        <div className="flex flex-row justify-center bg-blue-900">
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
