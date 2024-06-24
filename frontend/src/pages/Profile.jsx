import profileimg from '../assets/images/Profiletestlogo.jpeg';

const Profile = () => {
  return (
    <div className="max-w-md rounded bg-black p-4 pt-8 shadow-md">
      {/* a Tag muss noch durch Link gewechselt werden */}
      <a href="/" className="mr-2 font-medium text-teal-800">
        Back
      </a>
      <div className="mb-6 flex justify-between">
        <h1 className="mx-auto pt-3 text-2xl font-bold text-teal-700">Profile</h1>
      </div>
      {/* Profile Image Container */}
      <div className="mb-4 flex flex-col justify-center sm:flex-row">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-200 mx-auto w-32 rounded-full ring ring-offset-2">
            <img src={profileimg} alt="Profile Image" className="object-fit-cover rounded-full object-cover" />
          </div>
        </div>
        {/* Edit Profile Image */}
        <button className="mt-1 rounded px-3 py-1 text-xs font-medium text-teal-700 sm:ml-4">
          <label htmlFor="profile-image-input" className="cursor-pointer underline sm:no-underline">
            <input
              type="file"
              id="profile-image-input"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                  const imgSrc = event.target.result;
                  profileimg(imgSrc);
                };
                reader.readAsDataURL(file);
              }}
            />
            Edit Profile Image
          </label>
        </button>
      </div>
      {/* Hier Titel und Namen fetchen */}
      <h2 className="mb-8 text-center text-2xl font-bold text-teal-700">Title, Username</h2>
      {/* Button TOTAL WORKOUTS */}
      <div className="mb-4 flex justify-between space-x-6">
        <button className="mb-4 w-48 rounded-lg bg-neutral-800 px-4 py-2 text-white shadow-inner">
          <div className="flex flex-row items-center">
            {/* SVG TOTAL WORKOUTS */}
            <svg
              width="64px"
              height="64px"
              viewBox="0 -2.5 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
              transform="rotate(90)">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g fill="#702848">
                  {' '}
                  <g>
                    {' '}
                    <path d="M0.438600784,0.438237494 L219.300393,232.265872 C219.300393,232.265872 226.756606,237.524722 232.458417,231.389397 C238.160226,225.254072 233.774219,219.118747 233.774219,219.118747 L0.438600784,0.438237494 L0.438600784,0.438237494 Z">
                      {' '}
                    </path>{' '}
                    <path d="M69.7375247,22.3501121 L236.405823,202.027485 C236.405823,202.027485 243.862037,207.286334 249.563847,201.151009 C255.265657,195.015685 250.87965,188.88036 250.87965,188.88036 L69.7375247,22.3501121 L69.7375247,22.3501121 Z">
                      {' '}
                    </path>{' '}
                    <path d="M21.0528376,69.2415241 L187.721136,248.918896 C187.721136,248.918896 195.17735,254.177746 200.87916,248.042422 C206.58097,241.907097 202.194962,235.771771 202.194962,235.771771 L21.0528376,69.2415241 L21.0528376,69.2415241 Z">
                      {' '}
                    </path>{' '}
                    <path d="M128.320766,41.1943244 L244.761955,166.724176 C244.761955,166.724176 249.971166,170.398221 253.95468,166.111835 C257.938195,161.825451 254.873952,157.539065 254.873952,157.539065 L128.320766,41.1943244 L128.320766,41.1943244 Z">
                      {' '}
                    </path>{' '}
                    <path d="M37.0918028,123.582973 L153.532991,249.112825 C153.532991,249.112825 158.742203,252.78687 162.725716,248.500484 C166.709231,244.214099 163.644989,239.927714 163.644989,239.927714 L37.0918028,123.582973 L37.0918028,123.582973 Z">
                      {' '}
                    </path>{' '}
                    <path d="M188.159737,68.3650492 L240.934804,125.432206 C240.934804,125.432206 243.511631,127.153769 245.482147,125.145278 C247.452662,123.136787 245.936881,121.128295 245.936881,121.128295 L188.159737,68.3650492 L188.159737,68.3650492 Z">
                      {' '}
                    </path>{' '}
                    <path d="M66.2287188,181.430322 L119.003786,238.497479 C119.003786,238.497479 121.580613,240.219043 123.551129,238.210552 C125.521643,236.20206 124.005863,234.193569 124.005863,234.193569 L66.2287188,181.430322 L66.2287188,181.430322 Z">
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
            <p className="text-md ml-2">Total Workouts</p>
          </div>
          <p className="ml-8 text-sm text-gray-400">Workouts</p>
        </button>
        {/* Button TRAINING WEEKS */}
        <button className="mb-4 w-48 rounded-lg bg-neutral-800 px-4 py-2 text-white">
          <div className="flex flex-row items-center">
            {/* SVG Training Weeks */}
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0284 1.11813C9.69728 1.2952 9.53443 1.61638 9.49957 1.97965C9.48456 2.15538 9.46201 2.32986 9.43136 2.50363C9.3663 2.87248 9.24303 3.3937 9.01205 3.98313C8.5513 5.15891 7.67023 6.58926 5.96985 7.65195C3.57358 9.14956 2.68473 12.5146 3.06456 15.527C3.45234 18.6026 5.20871 21.7903 8.68375 22.9486C9.03 23.0641 9.41163 22.9817 9.67942 22.7337C10.0071 22.4303 10.0238 22.0282 9.94052 21.6223C9.87941 21.3244 9.74999 20.5785 9.74999 19.6875C9.74999 19.3992 9.76332 19.1034 9.79413 18.8068C10.3282 20.031 11.0522 20.9238 11.7758 21.5623C12.8522 22.5121 13.8694 22.8574 14.1722 22.9466C14.402 23.0143 14.6462 23.0185 14.8712 22.9284C17.5283 21.8656 19.2011 20.4232 20.1356 18.7742C21.068 17.1288 21.1993 15.3939 20.9907 13.8648C20.7833 12.3436 20.2354 10.9849 19.7537 10.0215C19.3894 9.29292 19.0534 8.77091 18.8992 8.54242C18.7101 8.26241 18.4637 8.04626 18.1128 8.00636C17.8332 7.97456 17.5531 8.06207 17.3413 8.24739L15.7763 9.61686C15.9107 7.44482 15.1466 5.61996 14.1982 4.24472C13.5095 3.24609 12.7237 2.47913 12.1151 1.96354C11.8094 1.70448 11.5443 1.50549 11.3525 1.36923C11.2564 1.30103 11.1784 1.24831 11.1224 1.21142C10.7908 0.99291 10.3931 0.923125 10.0284 1.11813ZM7.76396 20.256C7.75511 20.0744 7.74999 19.8842 7.74999 19.6875C7.75 18.6347 7.89677 17.3059 8.47802 16.0708C8.67271 15.6572 8.91614 15.254 9.21914 14.8753C9.47408 14.5566 9.89709 14.4248 10.2879 14.5423C10.6787 14.6598 10.959 15.003 10.9959 15.4094C11.2221 17.8977 12.2225 19.2892 13.099 20.0626C13.5469 20.4579 13.979 20.7056 14.292 20.8525C15.5 20.9999 17.8849 18.6892 18.3955 17.7882C19.0569 16.6211 19.1756 15.356 19.0091 14.1351C18.8146 12.7092 18.2304 11.3897 17.7656 10.5337L14.6585 13.2525C14.3033 13.5634 13.779 13.5835 13.401 13.3008C13.023 13.018 12.8942 12.5095 13.092 12.0809C14.4081 9.22933 13.655 6.97987 12.5518 5.38019C12.1138 4.74521 11.6209 4.21649 11.18 3.80695C11.0999 4.088 10.9997 4.39262 10.8742 4.71284C10.696 5.16755 10.4662 5.65531 10.1704 6.15187C9.50801 7.26379 8.51483 8.41987 7.02982 9.34797C5.57752 10.2556 4.71646 12.6406 5.04885 15.2768C5.29944 17.2643 6.20241 19.1244 7.76396 20.256Z"
                  fill="#702848"></path>{' '}
              </g>
            </svg>
            <p className="text-md">Training Weeks</p>
          </div>
          <p className="ml-8 text-sm text-gray-400">Am Stück</p>
        </button>
      </div>
      <div className="mb-4 flex justify-between space-x-6">
        <button className="w-48 rounded-lg bg-neutral-800 px-4 py-2 text-white">
          <div className="flex flex-row items-center">
            {/* SVG TOTAL WORKOUTS */}
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>ic_fluent_flash_on_24_regular</title> <desc>Created with Sketch.</desc>{' '}
                <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  {' '}
                  <g id="ic_fluent_flash_on_24_regular" fill="#702848" fillRule="nonzero">
                    {' '}
                    <path
                      d="M8.29400141,14 L6.52697684,21.0680983 C6.34050874,21.8139707 7.26339156,22.3240198 7.79572333,21.7692956 L19.7911396,9.2692956 C20.2486433,8.79254712 19.9107562,8 19.25,8 L14.7905694,8 L16.4615125,2.98717082 C16.6233953,2.50152249 16.2619183,2 15.75,2 L8.75,2 C8.41513973,2 8.12085023,2.22198299 8.02885704,2.54395915 L5.02885704,13.0439592 C4.89196785,13.5230713 5.25171584,14 5.75,14 L8.29400141,14 Z M13.0384875,8.51282918 C12.8766047,8.99847751 13.2380817,9.5 13.75,9.5 L17.4908021,9.5 L8.6662195,18.6957861 L9.98219059,13.4319017 C10.1005306,12.9585417 9.74251208,12.5 9.25458372,12.5 L6.74429749,12.5 L9.31572606,3.5 L14.7094306,3.5 L13.0384875,8.51282918 Z"
                      id="🎨-Color">
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
            {/* Fetch Name Aktiver Plan*/}
            <p className="text-md ml-2">Name Aktiver Plan</p>
          </div>
        </button>
        {/* Button ANZAHL TROPHYS */}
        <button className="w-48 rounded-lg bg-neutral-800 px-4 py-2 text-white">
          <div className="flex flex-row items-center">
            {/* SVG TROPHYS */}
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="64px"
              height="64px"
              viewBox="0 0 64.00 64.00"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#702848"
              stroke="#702848"
              strokeWidth="1.408">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.384"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <path
                    fill="#702848"
                    d="M60,6h-7V4c0-2.212-1.789-4-4-4H15c-2.211,0-4,1.788-4,4v2H4c-2.211,0-4,1.788-4,4v8 c0,6.074,4.925,11,11,11h0.096C12.01,38.659,19.477,46.395,29,47.761V56h-7c-2.211,0-4,1.788-4,4v3c0,0.552,0.447,1,1,1h26 c0.553,0,1-0.448,1-1v-3c0-2.212-1.789-4-4-4h-7v-8.239c9.523-1.366,16.985-9.1,17.899-18.761H53c6.075,0,11-4.926,11-11v-8 C64,7.788,62.211,6,60,6z M11,23c-2.762,0-5-2.239-5-5v-6h5V23z M2,18v-8c0-1.105,0.896-2,2-2h7v2H5c-0.553,0-1,0.446-1,1v7 c0,3.865,3.134,7,7,7v2C6.029,27,2,22.97,2,18z M42,58c1.104,0,2,0.895,2,2v2H20v-2c0-1.105,0.896-2,2-2H42z M31,56v-8.052 C31.334,47.964,31.662,48,32,48s0.666-0.036,1-0.052V56H31z M51,27c0,10.492-8.507,19-19,19s-19-8.508-19-19V4c0-1.105,0.896-2,2-2 h34c1.104,0,2,0.895,2,2V27z M53,12h5v6c0,2.761-2.238,5-5,5V12z M62,18c0,4.97-4.029,9-9,9v-2c3.866,0,7-3.135,7-7v-7 c0-0.554-0.447-1-1-1h-6V8h7c1.104,0,2,0.895,2,2V18z"></path>{' '}
                  <path
                    fill="#702848"
                    d="M39.147,19.36l-4.309-0.658l-1.936-4.123c-0.165-0.352-0.518-0.575-0.905-0.575s-0.74,0.224-0.905,0.575 l-1.936,4.123l-4.309,0.658c-0.37,0.058-0.678,0.315-0.797,0.671s-0.029,0.747,0.232,1.016l3.146,3.227l-0.745,4.564 c-0.062,0.378,0.099,0.758,0.411,0.979s0.725,0.243,1.061,0.059l3.841-2.123l3.841,2.123C35.99,29.959,36.157,30,36.323,30 c0.202,0,0.404-0.062,0.576-0.184c0.312-0.221,0.473-0.601,0.411-0.979l-0.745-4.564l3.146-3.227 c0.262-0.269,0.352-0.66,0.232-1.016S39.518,19.418,39.147,19.36z M34.781,23.238c-0.222,0.228-0.322,0.546-0.271,0.859 l0.495,3.029l-2.522-1.395c-0.151-0.083-0.317-0.125-0.484-0.125s-0.333,0.042-0.484,0.125l-2.522,1.395l0.495-3.029 c0.051-0.313-0.05-0.632-0.271-0.859l-2.141-2.193l2.913-0.446c0.329-0.05,0.612-0.261,0.754-0.563l1.257-2.678l1.257,2.678 c0.142,0.303,0.425,0.514,0.754,0.563l2.913,0.446L34.781,23.238z"></path>{' '}
                </g>{' '}
              </g>
            </svg>
            {/* Fetch Anzahl Trophys*/}
            <p className="text-md">Anzahl Trophys</p>
          </div>
        </button>
      </div>
      {/* Edit Userdata Button */}
      <div className="mb-4 flex justify-center">
        <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white">Edit Userdata</button>
      </div>
    </div>
  );
};

export default Profile;
