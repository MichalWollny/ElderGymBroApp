import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { EmojiEventsIcon, AssignmentTurnedInIcon, FitnessCenter } from '@mui/icons-material/';

import HomeIcon from '@mui/icons-material/Favorite';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      position="fixed"
      sx={{ bgcolor: 'black', top: 'auto', bottom: 0, width: 1 }}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction label="Recents" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<EmojiEventsIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<AssignmentTurnedInIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<FitnessCenter />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
