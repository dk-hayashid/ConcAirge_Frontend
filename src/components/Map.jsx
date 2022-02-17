import React, { useState } from 'react';
import IconButtons from './feelfeedback';

export default function Map(props){
    const Base64 = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} height="220px"/>
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

            <section>
                <div id="feelfeedbackbutton" align="center">
                    <p>Was it comfortable?</p>
                    <IconButtons />
                </div>
            </section>
            
            
        </form>
    )
}