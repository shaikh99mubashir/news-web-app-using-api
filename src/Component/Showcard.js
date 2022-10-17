
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppBar, Box } from '@mui/material';

const Showcard = () => {
    const location = useLocation()
    const data = location.state.e

    return (
    <div>
              
            <Box>
            <Link to='/' style={{textDecoration:'none'}}>
                <Typography sx={{ color : "black", fontSize:20}}>
                      Back 
                </Typography>
            </Link>
            </Box>
     

    <center>

      <Card sx={{ maxWidth: '80%', marginTop:5 }}>
      <CardMedia
        component="img"
        height="500"
        image={data.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'black'}}>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Source: {data.source.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Author: {data.author}
        </Typography>

      </CardContent>

    </Card>
    </center>
    </div>
  )
}

export default Showcard
