import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
//import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DehazeIcon from '@mui/icons-material/Dehaze';
import '/Users/pedcolom/Documents/GitHub/sports-direct/sports-direct/src/shared/components/NavBar/NavBar.css'


// see web with color changing feature. add label to bottom navigation action.
function NavBar() {
    return (

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Menu" icon={<DehazeIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon  />} />
                </BottomNavigation>
        </Paper>
    )
}

export default NavBar;