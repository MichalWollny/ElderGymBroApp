const ProgressBar = ({ progressPercentage }) => (
  <div className="w-full max-w-md rounded-lg">
    <div className="flex justify-center">
      <div className="mt-3 h-3 w-5/6 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="flex h-3 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
    </div>
    <div className="mb-1 flex justify-center">
      <span className="mr-2 mt-2 text-lg font-medium text-slate-500">{progressPercentage}%</span>
      <span className="mt-2 text-center text-lg font-medium text-slate-200">of all Trophys </span>
    </div>
  </div>
);
export default ProgressBar;
