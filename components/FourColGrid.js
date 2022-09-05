import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CardGrid, TwitterButton, SaleBanner } from '../components/Cards'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgressWithLabel  from '../components/CircleChart'
import Typography from '@mui/material/Typography';

export default function RatificationGrid(props) {
  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <Grid container spacing={2} minHeight={160} justifyItems="stretch">
        <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ minWidth: '160px', width: '100%' }}>
  <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="color.secondary" gutterBottom>
            Proposal
          </Typography>
          <Typography variant="h5" component="div">
            #51
          </Typography>
          <hr style={{marginTop: '1rem', marginBottom: '1rem'}} />
          <Typography variant="p" sx={{ mt: 0.5, fontWeight: 600, listStyle: 'none' }}  component="li" color="text.secondary">
            TextProposal
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.2rem', fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            16 Depositors
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.1rem', fontWeight: 600, listStyle: 'none' }} color="#5fd68b" component="li">
            Passed ✅
          </Typography>
         </CardContent>
          </Card>
  
        </Grid>
       
        <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ minWidth: '160px', width: '100%' }}>
          <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="color.secondary" gutterBottom>
            Delegators
          </Typography>
          <Typography variant="h5" component="div">
            21,473
          </Typography>
          <hr style={{marginTop: '1rem', marginBottom: '1rem'}} />
          <Typography variant="p" sx={{ mt: 0.5, color: '#5fd68b', fontWeight: 600, listStyle: 'none' }}  component="li">
            98.55% FOR
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.2rem', fontWeight: 600, listStyle: 'none' }} color="#ed4e33" component="li">
            0.08% AGAINST
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.1rem', fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            1.37% ABSTAINS
          </Typography>
         </CardContent>
          </Card>
          </Grid>        
          <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ minWidth: '160px', width: '100%' }}>
          <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="color.secondary" gutterBottom>
            Validators (Active)
          </Typography>
          <Typography variant="h5" component="div">
            101
          </Typography>
          <hr style={{marginTop: '1rem', marginBottom: '1rem'}} />
          <Typography variant="p" sx={{ mt: 0.5, color: '#5fd68b', fontWeight: 600, listStyle: 'none' }}  component="li">
            101 FOR
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.2rem', fontWeight: 600, listStyle: 'none' }} color="#ed4e33" component="li">
            0 AGAINST
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.1rem', fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            3 ABSTAINS
          </Typography>
         </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ minWidth: '160px', width: '100%' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="color.secondary" gutterBottom>
            Status
          </Typography>
          <Typography variant="h5" component="div">
            In Effect
          </Typography>
          <hr style={{marginTop: '1rem', marginBottom: '1rem'}} />
          <Typography variant="p" sx={{ mt: 0.5, fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            Amendments: 0
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.2rem', fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            Version: Interim
          </Typography>          
          <Typography variant="p" sx={{ mt: '0.1rem', fontWeight: 600, listStyle: 'none' }} color="text.secondary" component="li">
            Rev. 2022-08-25
          </Typography>
         </CardContent>
                </Card>        
          </Grid>
      </Grid>
    </Box>
  );
}