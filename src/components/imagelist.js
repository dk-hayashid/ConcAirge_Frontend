import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList(Props) {
    let Series=Props.Series;

    if (Series==="Tops"){
        var itemData = [
            {
              img: 'images/clothes/Tshirt.png',
              title: 'Tshirt',
            },
            {
              img: 'images/clothes/Shirt.png',
              title: 'Shirts',
            },
          ];
          
    }
    else if(Series==="Bottoms"){
        var itemData = [
            {
                img: 'images/clothes/Shirt.png',
                title: 'Shirts',
              },
            {
              img: 'images/clothes/Tshirt.png',
              title: 'Tshirt',
            },

          ];
    } 
    else if(Series==="Others"){
        var itemData = [
            {
                img: 'images/clothes/Shirt.png',
                title: 'Shirts',
              },
            {
              img: 'images/clothes/Tshirt.png',
              title: 'Tshirt',
            },

          ];
    }
    
  
  
    return (
    <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


