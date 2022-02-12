import React, { useContext } from "react";
import { MyContext } from "./ContextComponent";


const InnerSibling = () => {
    const {value2} = useContext(MyContext);



    return(
        <div>
            <h2 style={{color:'red'}}>{value2}</h2>
        </div>
    )
}

export default InnerSibling;