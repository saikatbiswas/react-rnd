import React, {forwardRef} from 'react';

const CustomButton = forwardRef((props, ref) => {
    console.log(props, ref);
    return (
        <div>
            <button ref={ref}>{props.children}</button>
        </div>
    );
});

export default CustomButton;