import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { EmojiEventsIcon, AssignmentTurnedInIcon, FitnessCenter } from '@mui/icons-material/';
import { Link } from 'react-router-dom';

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
      onChange={this.handleChange}>
      <BottomNavigationAction 
        label=""
        value=""
        component={Link}
        to="/"
        icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" value="" icon={<EmojiEventsIcon />} />
      <BottomNavigationAction label="Nearby" value="" icon={<AssignmentTurnedInIcon />} />
      <BottomNavigationAction label="Nearby" value="" icon={<FitnessCenter />} />
      <BottomNavigationAction label="Folder" value="" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
