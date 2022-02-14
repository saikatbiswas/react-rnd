import React, { useEffect, useState } from 'react';


const ProductsdPage = ()=>{
    const [productState, setProductState] = useState('null');

    // const params = new Proxy(new URLSearchParams(window.location.search), {
    //     get: (searchParams, prop) => searchParams.get(prop),
    // });
    //   let value = params.name;

    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('lastname');
    // console.log(myParam)
    // console.log(window.location.search);

    useEffect(()=>{
        setProductState('Nice');
    },[]);
    return(
        <div>{productState} Product</div>
    )
}

export default ProductsdPage;