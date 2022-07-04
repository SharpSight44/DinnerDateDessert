import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 230 }}>
      <CardMedia
        component="img"
        alt="picture"
        height="115"
        image={props.im}
      />
      <CardContent>
        <Typography  sx={{fonSize:16}} component="div">
          {props.title}
        </Typography>
        <Typography sx={{fontSize:14}} color="text.secondary">
        {props.des} <br/>
       
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
