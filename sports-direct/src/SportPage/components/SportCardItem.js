//DESCRIBES WHAT EACH INDIVIDUAL ITEM WILL SHOW - IMAGE, SPORT NAME, ETC.
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SportCardItem(props) {
  return (
    <Card sx={{ width: 420}}>
      <CardActionArea href="">
        <CardMedia
          component="img"
          height="350"
          image={props.image}
        />
        <CardContent>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {props.sport}
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

