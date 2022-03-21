import React, { useState, useEffect } from "react";

const List = ({getItem})=>{
    const [item, setItem] = useState([]);

    useEffect(()=>{
        console.log('update');
        setItem(getItem());
    },[getItem]);

    return item.map((item, i) => <div key={i}>{item}</div>)
        
}

export default List;