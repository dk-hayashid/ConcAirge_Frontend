import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


/*
============================================================
============================================================

冨士本が服装リストの追加、削除の挙動を見るためのテスト用jsファイルです。
clothed.jsファイルではないので注意！

============================================================
============================================================
*/

export default function Test_clothed(Props) {
    return (
      <ImageList  sx={{height: 250}} cols={4} rowHeight={50}>

          {Props.clothed_list.map((item) => (
            
            <ImageListItem 
              key={item.img}
              onClick={() => Props.remove_cloth(item)}
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


