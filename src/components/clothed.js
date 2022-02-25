import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function ClothedList(Props) {  

//もともと書いてたもの
      // sx={{
      //   display: 'grid',
      //   gridAutoColumns: 'minmax(100px, 1fr)',
      //   gridAutoRows: '80%',
      //   gridTemplateColumns: "repeat(minmax(100px,1fr))",
      //   gridAutoFlow: "column",
      //   height: 130,
      //   overflow:'auto'
      // }} 
      // rowHeight={100}

//gridAutoColumns: "25%",    

//rowHeight={100}
//gridAutoColumns: '100px'



//https://www.smpl-rfrns.net/CSS/grid-auto-flow.html
//https://stackoverflow.com/questions/69597992/how-to-implement-horizontal-scrolling-of-tiles-in-mui-gridlist
    return (
// gridtemplatecolumns: repeat(auto-fit, 200) style={{overflow : 'auto'}} repeat(3, 1fr)
        <ImageList  
          sx={{

            display: 'grid',
            gridAutoColumns: 150, 
            gridAutoFlow: "column",
            gridTemplateColumns: 'repeat(4,150px) !important',
            height: 170,
            overflow:'auto',

            
          }} 
          

        >

          {Props.clothed_list.map((item) => (
            <ImageListItem 
              key={item.id} 
              onClick={() => Props.remove_cloth(item)} 
              sx={{
                opacity:1,
                "&:hover":{
                  opacity:0.6,
                  cursor: "pointer",
                },
                "&:active":{
                  opacity:0.3,
                  cursor: "pointer",
                }
              }}
            > 
              
              <img
                  //width="100"
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  
                  
              />
              <ImageListItemBar
                  sx={{
                    background:
                      // 'rgba(0,0,0,0.2)'
                      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, ' +
                      'rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  title={item.title}
                  position="bottom"
              />
              
    
            </ImageListItem>
          ))}
          
        </ImageList>
      );

}


