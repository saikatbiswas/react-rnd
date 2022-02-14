import React, {createContext, useState} from "react";
import SiblingComponent1 from "./SiblingComponent1";
import SiblingComponent2 from "./SiblingComponent2";

export const MyContext = createContext({ value: null, setValue: () => {} });



const ContextComponent = () => {
    const [value2, setValue2] = useState(null);

    return(
        <MyContext.Provider value={{value2, setValue2}}>
            <SiblingComponent1 />
            <SiblingComponent2 />
        </MyContext.Provider>
        
    )
}

export default ContextComponent;