import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ValTable from './ValTable'
import CommunityTable  from './CommunityTable'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function ColorTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Ratified By"
        centered
      >
        <Tab label="Validators" {...a11yProps(0)} />
          <Tab label="Community" {...a11yProps(1)} />
          <Tab label="Governance" {...a11yProps(2)} />
         </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <ValTable />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <CommunityTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3 sx={{letterSpacing: '1px', ms: 1}}>Governance Council and Contributors</h3>
      </TabPanel>
      
    </Box>
  );
}