import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import Tshirt from '../public/Tshirt.png';


export default function BasicButtons() {
    const images=[
        {
            url:"images/clothes/Tshirt.png",
            title:"Tshirt",
        },
        {
            url:"images/clothes/Shirt.png",
            title:"Shirts",
        },
    ];

  return (
    <Stack spacing={2} direction="row">
      <img src={images[0].url} />
      <img src={images[1].url} />
       {/*<img src={`${process.env.PUBLIC_URL}/Tshirt.png`} alt="Logo"/>;*/}
    </Stack>
  );
}

//<Button variant="outlined">T-shirt</Button>
//<Button variant="outlined">Shirt</Button>