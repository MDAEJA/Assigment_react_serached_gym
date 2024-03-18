import React, { useState } from "react";

function ImagesContainer(props){
    
    return (
        <>

        <div style={{display:"flex", flexDirection:'column'}}>

            <div>
                <img src={props.imgname}></img>
            </div>
            <div style={{border:'2px solid black',padding:'20px 20px',textAlign:'center',backgroundColor:'rgb(237, 143, 109)',borderRadius:"10px"}}>
                <h2>{props.gymname}</h2>
                <p>{props.bodynamed}</p>
                <p>{props.equip}</p>
            </div>

        </div>
        </>
    )
    }
       
export default ImagesContainer;