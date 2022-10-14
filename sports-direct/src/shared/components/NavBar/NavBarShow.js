import React from 'react';

import NavBar from './NavBar';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const CustomizedTypography = styled(Typography)`
    color: #000055;`;



  function NavBarShow() {
    return (
        <CustomizedTypography>
            <NavBar />
        </CustomizedTypography>
    )
  }

  export default NavBarShow;