import React from 'react';
const Position = ({current,active,total,imgPosition,onPosition}) =>{
    const arr = new Array(total).fill(1);

    return arr.map((num,index)=>{
        let classname = current === index ? `${active} ${imgPosition}`:imgPosition;
        return(
            <div
                key={index}
                className={classname}
                style={{left:`${((index*2)+40)}%`}}
                onClick={()=>onPosition(index)}
            />)
    });
}

export default Position;