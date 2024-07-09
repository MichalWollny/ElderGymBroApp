const AchievementItem = ({ achievement, unlocked, onClick }) => (
  <div key={achievement.id} className="flex flex-col items-center" onClick={onClick}>
    <img
      src={achievement.imageUrl}
      alt={achievement.name}
      className={`ring-offset-3 mb-2 h-32 w-32 rounded-full ring-4 ring-pink-800 ring-offset-teal-800 ${unlocked ? '' : 'opacity-30 ring-gray-700'}`}
    />
    <span className="text-center font-cthulhumbus text-sm">{achievement.name}</span>
  </div>
);
export default AchievementItem;
