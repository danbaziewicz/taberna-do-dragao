import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextRating from '../../Rating/Rating';

export default function ActionAreaCard({titulo, descricao, image, valor}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <TextRating valor={valor}/>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="bebida"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
