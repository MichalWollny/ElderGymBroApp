export function getTitle(karmaPoints) {
  if (karmaPoints < 10) {
    return 'Cannon Fodder Cultist';
  } else if (karmaPoints < 20) {
    return 'Tentacle-Tickler Trainee';
  } else if (karmaPoints < 30) {
    return "Dagon's Dishwasher";
  } else if (karmaPoints < 40) {
    return "Cthulhu's Coffee Fetcher";
  } else if (karmaPoints < 50) {
    return 'Eldritch Errand Runner';
  } else if (karmaPoints < 60) {
    return "Deep One's Doormat";
  } else if (karmaPoints < 70) {
    return 'Paranormal Paper Pusher';
  } else if (karmaPoints < 80) {
    return "Great Old One's Goofball";
  } else if (karmaPoints < 90) {
    return 'Tentacle Tamer';
  } else if (karmaPoints < 100) {
    return 'Supreme Spookster';
  }
}
