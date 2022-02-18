import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import { makeStyles } from '@mui/styles';
//https://reffect.co.jp/react/reack-usestate-to-do-application
//冨士本やること：リストの追加、削除方法を調べる


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden'
//   }}));



export default function ClothedList(Props) {

    //この配列を服装選択画面のクリックで追加&clothedボタンのクリックで削除できるようにしたい。
    const [clothed_list, setcloth]= useState([
        {
          img: 'images/clothes/tops/Tshirt.png',
          title: 'Tshirt',
          cloth:0.5,
        }
      ]);
    
    function testfunc(cloth){
      const new_clothed_list=[...clothed_list,cloth];
      setcloth(new_clothed_list);
    }
      
    var itemData = [
        {
          img: 'images/clothes/tops/Tshirt.png',
          title: 'Tshirt',
          cloth:0.5,
        },
        {
          img: 'images/clothes/tops/Shirt.png',
          title: 'Shirts',
          cloth:0.3,
        },
        {
          img: 'images/clothes/tops/Tshirt.png',
          title: 'Tshirt',
          cloth:0.2,

        },
        // {
        //   img: 'images/clothes/tops/Shirt.png',
        //   title: 'Shirts',
        //   cloth:0.1,
        // },
        // {
        //   img: 'images/clothes/tops/Shirt.png',
        //   title: 'Shirts',
        //   cloth:0.3,
        // },
        // {
        //   img: 'images/clothes/tops/Tshirt.png',
        //   title: 'Tshirt',
        //   cloth:0.2,

        //  },
        // {
        //   img: 'images/clothes/tops/Shirt.png',
        //   title: 'Shirts',
        //   cloth:0.1,
        // },
        // {
        //   img: 'images/clothes/tops/Shirt.png',
        //   title: 'Shirts',
        //   cloth:0.3,
        // },
        // {
        //   img: 'images/clothes/tops/Tshirt.png',
        //   title: 'Tshirt',
        //   cloth:0.2,

        // },
        // {
        //   img: 'images/clothes/tops/Shirt.png',
        //   title: 'Shirts',
        //   cloth:0.1,
        // },
        
      ];


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
            gridAutoColumns: "160px", 
            gridAutoRows: '80%',
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(minmax(100px,1fr))",
            height: 200,
            overflow:'auto'
          }} 
          rowHeight={100}

        >

          {itemData.map((item) => (
            <ImageListItem key={item.img}> 
              
              <img
                  width="100"
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  
                  
              />
              <ImageListItemBar
                  sx={{
                    background:
                      // 'rgba(0,0,0,0.2)'
                      'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, ' +
                      'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  title={item.title}
                  position="top"
              />
              
    
            </ImageListItem>
          ))}
        </ImageList>
      );

}


