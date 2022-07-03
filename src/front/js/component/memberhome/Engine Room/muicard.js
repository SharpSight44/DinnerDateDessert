import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia sx={{objectFit:"cover"}}
          component="img"
          
          height="100"
          image={props.im}
          alt="picture"
        />
        <CardContent sx={{height:40}}>
          <Typography  sx={{fontSize:14}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
