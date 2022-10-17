import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function MediaCard({data}) {
    const navigate = useNavigate();
    const showdata =(e)=>{
        navigate('/showcard',
        {
            state:{
                e
            }
        })
    }
  return (
    <Card sx={{ maxWidth: 345, width : 400, cursor:'pointer'}} onClick={()=>showdata(data)}>
      <CardMedia
        component="img"
        height="140"
        image={data.urlToImage}
        alt="green iguana"
      />
      <Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title.slice(0,10)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.description.slice(0,20)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>showdata(data)}>Learn More</Button>
      </CardActions>
      </Box>
    </Card>
  );
}
