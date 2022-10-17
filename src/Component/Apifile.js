import { AppBar, Box, Card, Grid, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import MediaCard from './Card';

const Apifile = () => {
    const [dataState, setDataState] = useState([]);
    const getData = () =>{
        axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bf80562e80e940b58a8c9f30efd4b61e")
        .then((success)=>{setDataState(success.data.articles)})
        .catch((err)=>{setDataState(err)})
    }
    console.log('data state==>', dataState);
    const navigate = useNavigate();
    const showdata =(e)=>{
        navigate('/showcard',
        {
            state:{
                e
            }
        })
    }
    useEffect(() => {
        getData();
      }, []);
  return (
    <div>
        <AppBar sx={{ textAlign:'center'}}>
            <Box>
                <Typography sx={{ fontSize:40}}>
                    NEWS HEADLINE
                </Typography>
            </Box>
        </AppBar>
        <Carousel sx={{marginTop:7}}>
            {dataState.map(data => <Box>
                <img src={data.urlToImage} width='100%' height="300vh" onClick={()=>showdata(data)} />
                <Typography onClick={()=>showdata(data)} sx={{position:'absolute', top:240, color:'black',backgroundColor:'white', fontSize:30}}>{data.title}</Typography>
            </Box>)}
      </Carousel>

      <Grid container  sx={{marginTop:5}}>


        {dataState.map((e,i)=>
        <Grid item md={3} sm={6} xs={12} sx={{gap : 2, marginBottom : 3, display:'flex', justifyContent:'center',}}>
        <MediaCard data={e}/>
        </Grid>
        )}
      </Grid>

    </div>
  )
}

export default Apifile
