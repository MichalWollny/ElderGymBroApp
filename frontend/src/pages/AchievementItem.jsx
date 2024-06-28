const AchievementItem = ({ achievement }) => (
  <div key={achievement.id} className="flex flex-col items-center">
    <img
      src={achievement.imageUrl}
      alt={achievement.name}
      className="mb-2 h-32 w-32 rounded-full border border-gray-300"
    />
    <span className="text-center font-cthulhumbus text-sm">{achievement.name}</span>
  </div>
);
export default AchievementItem;
