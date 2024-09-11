import React from "react";


export const Card = ({title="", description="", effects=[]})=>{
return <div>
    <h3>{title}</h3>
    <p>{description}</p>
</div>
}