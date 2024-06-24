// import profileimg from '../assets/images/Profiletestlogo.jpeg';

// import avatarImage from '../assets/images/avatar.avif';
// import avatarImage2 from '../assets/images/avatar2.avif';
// import avatarImage3 from '../assets/images/avatar3.avif';
// import avatarImage4 from '../assets/images/gymLord.avif';

import avatarImage5 from '../assets/images/gymLord.png';

// passing svgs does not work
// import icnEneryg from '../assets/icons/svg/energy.svg';
// import icnTrophy from '../assets/icons/svg/trophy.svg';
// import icnDumbbell from '../assets/icons/svg/dumbbell.svg';
// import icnFlash from '../assets/icons/svg/flash.svg';
// import icnFlame from '../assets/icons/svg/flame.svg';

const Profile = () => {
  return (
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

      {/* window name bar*/}
      <div className="flex flex-row justify-center">
        <h1 className="cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Profile
        </h1>
      </div>

      {/* profile image bar */}
      <div className="flex flex-row justify-center">
        {/* profile image container */}
        <div className="my-8 flex flex-col justify-center">
          {/* profile image */}
          <div className="avatar">
            <div className="mx-auto w-32 rounded-full ring-4 ring-white ring-offset-2 ring-offset-sky-300">
              <img src={avatarImage5} alt="Profile Image" className="object-fit-cover rounded-full object-cover" />
            </div>
          </div>

          {/* profile image bar */}
          <div className="flex flex-row justify-center">
            <div className="-mr-24 -mt-6">
              <div className="max-w-12 cursor-pointer rounded-full bg-pink-900 p-2 transition-transform hover:scale-110">
                <label htmlFor="upload" className="flex cursor-pointer flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </label>
                <input id="upload" type="file" className="hidden" />
              </div>
            </div>
          </div>

          {/* add endpoints for title and name*/}
          <div className="flex cursor-pointer flex-row justify-center">
            <div className="flex flex-col">
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">-=|</h2> */}
              {/* <h2 className="text-center text-xl font-normal font-cthulhumbus italic text-teal-700">The infamous</h2> */}
              <h1 className="cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-2xl md:text-4xl">
                The infamous
              </h1>
              <h1 className="cursor-default bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-4xl md:text-5xl">
                Lord of the Gym
              </h1>
              {/* <h2 className="text-center text-xl font-semibold text-teal-700">|=-</h2> */}
            </div>
          </div>
        </div>
      </div>

      {/* flex box for tiles*/}
      <div className="flex flex-wrap justify-center">
        {/* total workouts tile */}
        <div className="flex flex-wrap justify-center">
          <div className="card glass lg:card-side m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-110">
            <div className="flex flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.377 0.1875L3.8957 38.404C3.64623 38.7441 3.52535 39.1616 3.55453 39.5823C3.5837 40.0031 3.76105 40.3998 4.05508 40.7022C4.33024 40.9827 4.69427 41.1589 5.08495 41.2008C5.47564 41.2427 5.86874 41.1476 6.19708 40.9317L44.377 0.1875Z"
                  fill="#702848"
                />
                <path
                  d="M40.5508 12.2891L9.17622 41.3909C8.92675 41.731 8.80587 42.1485 8.83504 42.5692C8.86422 42.99 9.04157 43.3868 9.33559 43.6891C9.61075 43.9696 9.97478 44.1459 10.3655 44.1877C10.7562 44.2296 11.1493 44.1345 11.4776 43.9186L40.5508 12.2891Z"
                  fill="#702848"
                />
                <path
                  d="M32.3633 3.78809L0.98394 32.89C0.734467 33.23 0.613583 33.6475 0.642761 34.0682C0.671938 34.489 0.849287 34.8858 1.14331 35.1881C1.41847 35.4686 1.7825 35.6449 2.17319 35.6867C2.56388 35.7286 2.95698 35.6335 3.28531 35.4177L32.3633 3.78809Z"
                  fill="#702848"
                />
                <path
                  d="M37.2607 22.5176L15.3403 42.8506C15.1657 43.0877 15.0806 43.3789 15.1001 43.6726C15.1197 43.9664 15.2426 44.2437 15.4471 44.4555C15.6394 44.6515 15.8938 44.7745 16.1668 44.8036C16.4398 44.8326 16.7144 44.7659 16.9436 44.6149L37.2607 22.5176Z"
                  fill="#702848"
                />
                <path
                  d="M22.874 6.58789L0.955182 26.9194C0.780553 27.1564 0.695474 27.4476 0.715018 27.7413C0.734565 28.0351 0.857471 28.3125 1.06196 28.5243C1.25427 28.7202 1.50867 28.8432 1.78165 28.8723C2.05464 28.9013 2.32924 28.8347 2.55849 28.6836L22.874 6.58789Z"
                  fill="#702848"
                />
                <path
                  d="M32.5166 32.9658L22.5525 42.1809C22.4687 42.2995 22.428 42.4431 22.437 42.588C22.446 42.7329 22.5041 42.8704 22.6019 42.9778C22.6891 43.0741 22.8084 43.1353 22.9375 43.15C23.0666 43.1647 23.1966 43.1318 23.3031 43.0574L32.5166 32.969V32.9658Z"
                  fill="#702848"
                />
                <path
                  d="M12.7773 11.6748L2.81322 20.8899C2.72949 21.0085 2.68874 21.1521 2.69773 21.297C2.70671 21.4419 2.76489 21.5794 2.86263 21.6867C2.94981 21.7831 3.06912 21.8443 3.19821 21.859C3.3273 21.8736 3.45731 21.8407 3.56388 21.7664L12.7773 11.6748Z"
                  fill="#702848"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold">My total workouts</h2>
                <p className="py-1 font-thin">Subheading</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* my training weeks tile */}
        <div className="flex flex-wrap justify-center">
          <div className="card glass lg:card-side m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-110">
            <div className="flex flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8035 1.0037C13.1827 1.32095 12.8773 1.89639 12.812 2.54725C12.7838 2.8621 12.7416 3.17471 12.6841 3.48605C12.5621 4.14691 12.331 5.08076 11.8979 6.13682C11.034 8.24343 9.38197 10.8061 6.19375 12.7101C1.70075 15.3933 0.0341536 21.4224 0.746335 26.8196C1.47342 32.33 4.76662 38.0413 11.2823 40.1166C11.9315 40.3236 12.6471 40.1759 13.1492 39.7316C13.7636 39.188 13.7949 38.4676 13.6388 37.7403C13.5242 37.2066 13.2815 35.8702 13.2815 34.2738C13.2815 33.7573 13.3065 33.2273 13.3643 32.6959C14.3657 34.8893 15.7232 36.4889 17.0799 37.6328C19.0982 39.3346 21.0054 39.9532 21.5732 40.113C22.004 40.2343 22.4619 40.2419 22.8838 40.0804C27.8658 38.1763 31.0023 35.5919 32.7545 32.6375C34.5028 29.6895 34.749 26.5811 34.3578 23.8415C33.969 21.116 32.9417 18.6817 32.0385 16.9556C31.3554 15.6502 30.7254 14.7149 30.4363 14.3056C30.0817 13.8039 29.6197 13.4166 28.9618 13.3451C28.4375 13.2881 27.9123 13.4449 27.5152 13.777L24.5808 16.2306C24.8328 12.339 23.4002 9.06948 21.6219 6.6055C20.3306 4.81629 18.8572 3.44216 17.7161 2.51839C17.1429 2.05424 16.6458 1.69772 16.2862 1.45358C16.106 1.33139 15.9598 1.23694 15.8548 1.17084C15.233 0.779345 14.4873 0.654313 13.8035 1.0037ZM9.55771 35.2924C9.54112 34.967 9.53152 34.6262 9.53152 34.2738C9.53154 32.3876 9.80673 30.0068 10.8966 27.7939C11.2616 27.0529 11.718 26.3305 12.2862 25.652C12.7642 25.081 13.5573 24.8448 14.2901 25.0553C15.0228 25.2659 15.5484 25.8808 15.6176 26.6089C16.0417 31.0671 17.9175 33.5602 19.5609 34.9459C20.4007 35.6541 21.2109 36.0979 21.7978 36.3611C24.0628 36.6252 28.5345 32.4852 29.4918 30.8709C30.732 28.7799 30.9545 26.5132 30.6423 24.3258C30.2777 21.771 29.1823 19.4069 28.3108 17.8733L22.485 22.7444C21.819 23.3015 20.8359 23.3375 20.1272 22.831C19.4184 22.3243 19.1769 21.4132 19.5478 20.6453C22.0155 15.5363 20.6034 11.506 18.5349 8.63989C17.7137 7.50222 16.7895 6.55493 15.9628 5.82117C15.8126 6.32471 15.6247 6.87049 15.3894 7.44422C15.0553 8.25891 14.6244 9.13281 14.0698 10.0225C12.8278 12.0147 10.9656 14.086 8.1812 15.7488C5.45814 17.375 3.84365 21.6481 4.46688 26.3713C4.93674 29.9323 6.6298 33.2649 9.55771 35.2924Z"
                  fill="#702848"
                  stroke="black"
                  strokeWidth="0.00064"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title min-w-36 py-2 font-semibold">My training weeks</h2>
                <p className="py-1 font-thin">Subheading</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* my active plan tile */}
        <div className="flex flex-wrap justify-center">
          <div className="card glass lg:card-side m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-110">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 31 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.50333 44.6846C7.17718 44.5469 6.90615 44.3046 6.733 43.9958C6.55985 43.687 6.49444 43.3294 6.54708 42.9793L9.44771 24.0933H1.7499C1.50585 24.0999 1.26356 24.0503 1.04172 23.9484C0.819877 23.8465 0.624413 23.695 0.470407 23.5056C0.316402 23.3161 0.207972 23.0939 0.153484 22.8559C0.0989959 22.6179 0.0999066 22.3706 0.156145 22.133L4.9374 1.41428C5.02153 1.05771 5.22594 0.741013 5.51621 0.517499C5.80649 0.293985 6.16492 0.177302 6.53114 0.187093H22.4686C22.7067 0.186283 22.942 0.238832 23.1571 0.340878C23.3722 0.442923 23.5618 0.591873 23.7118 0.77678C23.8639 0.963777 23.9716 1.18285 24.0268 1.41749C24.082 1.65214 24.0833 1.89626 24.0305 2.13147L21.2733 14.5308H28.8436C29.1423 14.5302 29.4352 14.6136 29.6888 14.7714C29.9424 14.9292 30.1466 15.1551 30.278 15.4233C30.3922 15.6808 30.4362 15.9639 30.4054 16.2439C30.3746 16.5238 30.2701 16.7906 30.1027 17.0171L9.38396 44.1108C9.24393 44.3184 9.05696 44.4901 8.83822 44.6119C8.61947 44.7337 8.37509 44.8023 8.1249 44.8121C7.91164 44.8081 7.70093 44.7649 7.50333 44.6846ZM17.289 17.7183L20.4765 3.37459H7.80615L3.75802 20.9058H13.1771L10.643 37.2896L25.6561 17.7183H17.289Z"
                  fill="#702848"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold">My active plan</h2>
                <p className="py-1 font-thin">Subheading</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* my trophies tile */}
        <div className="flex flex-wrap justify-center">
          <div className="card glass lg:card-side m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-110">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold">My trophies</h2>
                <p className="py-1 font-thin">Subheading</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Userdata Button */}
      <div className="mt-6 flex justify-center">
        <button className="rounded-full border border-white bg-pink-900 px-4 py-2 text-white transition-transform hover:scale-110">
          <a href="/Template">Edit Userdata</a>
        </button>
      </div>
    </div>
  );
};

export default Profile;
