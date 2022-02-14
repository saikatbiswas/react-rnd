import React, { useContext } from "react";
import { MyContext } from "./ContextComponent";


const SiblingComponent2 = () => {
    const { value2 } = useContext(MyContext)

    return(
        <div>{value2}</div>
    )
}

export default SiblingComponent2;