import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Home = () => {
  return (
    <>
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "50%",
          height: "70vh",
          margin:"5% auto 0 auto"
        },
      }}
    >
    
      <Paper  elevation={6} >
      <div style={{ width: "50%", margin: "auto" , justifyConten:"center" , alignItems:"center" , marginTop:"140px"}}>
       <h1 style={{color:"orange"}}> CRUD APPLICATION </h1>
       <h2  style={{color:"green"}}> USING MERN STACK </h2>
       <h3 style={{color:"blue"}} > - BY VIVEK CHAUBEY  </h3>
       </div>
      </Paper>
     
    </Box>
    </>
  )
}

export default Home