import React, { useState } from 'react';

export default function Map(props){
    const Base64 = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} width="100px"/>
    return (
        <form class="recommend">   

            <section>
                <p align="center"><span>{props.comTem}℃</span> is good for you!</p>
            </section>
        
            <section>
                <div id="map_image">
                    <p>Try the location we presented.</p>
                    <Base64 data={props.map} />
                </div>
            </section>
            
            
        </form>
    )
}