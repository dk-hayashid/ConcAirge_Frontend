import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';



// interface StyleColor {
//   backGroundColor: string;
// }

export default function StandardImageList(Props) {
    let Series=Props.Series;
    let sex=Props.sex;
    
    /*必要ないかも
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const useStyles = makeStyles({
      Tshirt: {
        background: (props) => props.backGroundColor
    }
    });
    const classes = useStyles({
      backGroundColor:
        hovered && !clicked ? "steelblue" : clicked ? "aqua" : "white"
    });
    */
    
    if (sex==="male"){
      if (Series==="Tops"){
          var itemData = [
              {
                img: 'images/clothes/tops/heattech.png',
                title: 'ヒートテック',
                cloth:0.2,
                id:new Date().getTime(),
              },
              {
                img: 'images/clothes/tops/T-shirt.png',
                title: 'Tシャツ',
                cloth:0.08,
                id:new Date().getTime(),
              },
              {
                img: 'images/clothes/tops/shirt.png',
                title: 'シャツ',
                cloth:0.25,
                id:new Date().getTime(),
                
              },
              {
                img: 'images/clothes/tops/cardigan.png',
                title: 'カーディガン',
                cloth:0.3,
                id:new Date().getTime(),
                
              },
              {
                img: 'images/clothes/tops/jacket.png',
                title: 'ジャケット',
                cloth:0.54,
                id:new Date().getTime(),
                
              },
              {
                img: 'images/clothes/tops/vest.png',
                title: 'ベスト',
                cloth:0.17,
                id:new Date().getTime(),
              },
              {
                img: 'images/clothes/tops/knit.png',
                title: 'ニット',
                cloth:0.5,
                id:new Date().getTime(),
              },
            ];
            
      }
      else if(Series==="Bottoms"){
          var itemData = [
              {
                  img: 'images/clothes/bottoms/slacks.png',
                  title: 'パンツ',
                  cloth:0.25,
                  id:new Date().getTime(),
                },



            ];
      } 
      else if(Series==="Others"){
          var itemData = [
              {
                  img: 'images/clothes/others/stole.png',
                  title: 'マフラー・ストール',
                  cloth:0.15,
                  id:new Date().getTime(),

                },
            ];
      }
    }

    else if (sex==="female"){
      if (Series==="Tops"){
          var itemData = [
            {
              img: 'images/clothes/tops/heattech.png',
              title: 'ヒートテック',
              cloth:0.2,
              id:new Date().getTime(),
            },
            {
              img: 'images/clothes/tops/T-shirt.png',
              title: 'Tシャツ',
              cloth:0.08,
              id:new Date().getTime(),
            },
            {
              img: 'images/clothes/tops/shirt.png',
              title: 'シャツ',
              cloth:0.25,
              id:new Date().getTime(),
              
            },
            {
              img: 'images/clothes/tops/cardigan.png',
              title: 'カーディガン',
              cloth:0.2,
              id:new Date().getTime(),
              
            },
            {
              img: 'images/clothes/tops/jacket.png',
              title: 'ジャケット',
              cloth:0.54,
              id:new Date().getTime(),
              
            },
            {
              img: 'images/clothes/tops/knit.png',
              title: 'ニット',
              cloth:0.39,
              id:new Date().getTime(),
              
            },
            ];
            
      }
      else if(Series==="Bottoms"){
          var itemData = [
            {
              img: 'images/clothes/bottoms/slacks.png',
              title: 'パンツ',
              cloth:0.24,
              id:new Date().getTime(),
            },
            {
              img: 'images/clothes/bottoms/skirt.png',
              title: 'スカート',
              cloth:0.23,
              id:new Date().getTime(),
            },

            ];
      } 
      else if(Series==="Others"){
          var itemData = [
            {
              img: 'images/clothes/others/one-piece.png',
              title: 'ワンピース',
              cloth:0.5,
              id:new Date().getTime(),
            },
            {
              img: 'images/clothes/others/stole.png',
              title: 'マフラー・ストール',
              cloth:0.2,
              id:new Date().getTime(),
            },

            ];
      }
    }
    
    //gridAutoFlow: "column",gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",gridAutoColumns: "minmax(160px, 1fr)",
  
    //イベントハンドラ一覧
    //https://qiita.com/P-man_Brown/items/bc7606504d64da42e13e
    
    //参考になりそうなサイト
    //https://dev.classmethod.jp/articles/make-a-style-that-changes-color-with-mouse-operation-trigger-in-makestyle-of-material-ui/
    
    //https://masalib.hatenablog.com/entry/2020/12/26/000000

    return (
    <ImageList
      
      sx={{
        display: 'grid',
        overflow:'auto',
        gridAutoColumns: 150 ,
        gridTemplateColumns: 'repeat(4,1fr) !important',
      }}
      //cols={4} 
      //rowHeight={'auto'}
      //rowHeight={150}
    >
      {itemData.map((item) => (
        <ImageListItem 
          key={item.img+new Date().getTime()}
          sx={{
            borderRadius: 10,
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
          onClick={() => Props.add_cloth(item)}
        >
          <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              
              loading="lazy"
          />
          <ImageListItemBar
              sx={{
                background:
                   //'rgba(0,0,0,0.2)',
                  // 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, ' +
                  // 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                WebkitTextFillColor:'white',
              }}
              title={item.title}
              position="bottom"
          />
          

        </ImageListItem>
      ))}
    </ImageList>
  );
}


/*
<ImageList  sx={{height: 450}} cols={4} rowHeight={50}>
      {itemData.map((item) => (
        <ImageListItem 
          key={item.img}
          // className={classes.img}
          // //onClick={() => Props.changeclothes(item.cloth)}
          
          // onMouseEnter={() => setHovered(true)}
          // onMouseDown={() => setClicked(true)}
          // onMouseUp={() => setClicked(false)}
          // onMouseLeave={() => setHovered(false)}
        >
          <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              onClick={() => Props.add_cloth(item)}
              loading="lazy"
              //onClick={() => alert(item.title)}
              className={item.title}
              onMouseEnter={() => setHovered(true)}
              onMouseDown={() => setClicked(true)}
              onMouseUp={() => setClicked(false)}
              onMouseLeave={() => setHovered(false)}
              
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
*/
