import React, { useContext } from "react";
import { MyContext } from "./ContextComponent";
import InnerSibling from "./InnerSibling";


const SiblingComponent1 = () => {
    const {setValue2} = useContext(MyContext);

    const handleChange = event => {
        setValue2(event.target.value);
    };

    return(
        <div>
            {/* <h2>{value2}</h2> */}
            <input type="text" onChange={(event)=> handleChange(event)} />
            <InnerSibling />
        </div>
    )
}

export default SiblingComponent1;