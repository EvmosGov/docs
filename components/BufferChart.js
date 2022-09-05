import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function BufferChart(props) {
    return (
        <Box sx={{ width: '77%', display: 'inline-block'}}>
          <LinearProgress 
          variant="buffer" 
          value={props.amount} 
          valueBuffer={props.bufferAmount} 
          color={props.color}
          suffix='%'
          />
        
        </Box>
      );
    }