export function getTitle(karmaPoints) {
  if (karmaPoints < 100) {
    return 'Cannon Fodder Cultist';
  } else if (karmaPoints < 200) {
    return 'Tentacle-Tickler Trainee';
  } else if (karmaPoints < 300) {
    return "Dagon's Dishwasher";
  } else if (karmaPoints < 400) {
    return "Cthulhu's Coffee Fetcher";
  } else if (karmaPoints < 500) {
    return 'Eldritch Errand Runner';
  } else if (karmaPoints < 600) {
    return "Deep One's Doormat";
  } else if (karmaPoints < 700) {
    return 'Paranormal Paper Pusher';
  } else if (karmaPoints < 800) {
    return "Great Old One's Goofball";
  } else if (karmaPoints < 900) {
    return 'Tentacle Tamer';
  } else if (karmaPoints < 1000) {
    return 'Supreme Spookster';
  }
}
