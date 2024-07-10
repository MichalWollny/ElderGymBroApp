import { useAuth } from '../../context/AuthProvider';
import StyledCircularProgressbar from './CircularProgress';

const UserBar = () => {
  const { userData, isLoggedIn } = useAuth();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-900 py-2 font-cthulhumbus shadow-md">
      <div className="grid w-full grid-cols-3">
        <div></div>
        {isLoggedIn && userData ? (
          <div className="flex flex-col items-center justify-center">
            <div className="mt-2 cursor-default bg-gradient-to-br from-yellow-950 to-yellow-500 bg-clip-text text-center font-cthulhumbus text-xl font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
              {userData.username || 'No username'}
            </div>
            <div className="mt-0 cursor-default text-nowrap bg-gradient-to-br from-teal-500 to-green-800 bg-clip-text text-center font-cthulhumbus text-lg font-medium leading-tight text-transparent sm:text-2xl md:text-xl">
              {userData.awards?.title || 'No title'}
            </div>
          </div>
        ) : (
          <p className="text-center text-teal-700">Loading...</p>
        )}
        <div className="ml-6 flex flex-col justify-center">
          <div className="mx-auto mt-2 w-8 sm:w-12 md:w-16">
            {isLoggedIn && userData ? (
              <StyledCircularProgressbar
                value={userData.awards?.progress}
                text={userData.awards?.level}
                className=""
                background={true}
                strokeWidth={15}
                backgroundPadding={0}
              />
            ) : (
              <p className="text-center text-teal-500">Loading...</p>
            )}
          </div>
          <p className="pt-1 text-center font-cthulhumbus text-xs text-teal-500">Karma</p>
        </div>
      </div>
    </nav>
  );
};

export default UserBar;
