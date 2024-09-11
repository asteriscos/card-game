import React from "react";


export const UsedCards = ({usedCards=[]})=>{
return <div>
    <h3>Used cards</h3>
    <ul>
        {usedCards.map((card, i)=><li key={i}>{card?.title}</li>)}
    </ul>
</div>
}