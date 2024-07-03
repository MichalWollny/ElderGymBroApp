import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-700">404 Not Found</h1>
        <Link to="/">
          <button className="mt-2 rounded-lg bg-blue-500 p-2 font-bold text-white hover:bg-blue-600">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
