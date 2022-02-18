import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicButtons from './button'
import ImageList from './imagelist'

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

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  //const Tops=["A","B"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Tops" {...a11yProps(0)} />
          <Tab label="Bottoms" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/*{Tops}*/} 
        <ImageList
          Series="Tops"
          changeclothes={(cloth) => props.changeclothes(cloth)}
          add_cloth={(cloth) => props.add_cloth(cloth)}
          sex={props.sex}
        >
        </ImageList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ImageList
          Series="Bottoms"
          changeclothes={(cloth) => props.changeclothes(cloth)}
          add_cloth={(cloth) => props.add_cloth(cloth)}
          sex={props.sex}
        >
        </ImageList>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ImageList
          Series="Others"
          changeclothes={(cloth) => props.changeclothes(cloth)}
          add_cloth={(cloth) => props.add_cloth(cloth)}
          sex={props.sex}
        >
        </ImageList>
      </TabPanel>
    </Box>
  );
}
