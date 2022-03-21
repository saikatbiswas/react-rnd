import React, {useMemo, useCallback, useState} from 'react'

const Champions = ({items})=> {
    const [count, setCount] = useState(5);
    const [countCall, setCountCall] = useState(10);
    let a = 5;
    const calculation = (a)=>{
        return a+ 10;
    }
    const changeMemo = ()=>{
        setCount((c)=>c+10);
    }

    const memoData = useMemo(()=> calculation(count), [count])

    const chapRender = ()=>(
        items.map((item, i)=>(
            <div key={item.d_score}>
                <div 
                    className={`rank-image-box ${i === 1 ? 'two': i===2 ? 'three':''}`}
                    style={{backgroundImage: `url(${item.s_profile_pic})`}}
                >
                    <span>{i+1}</span>    
                </div>
                <span className="champion-name">{item.student_name}</span>
                <span className="champ-score">{item.d_score}</span>
            </div>
        ))
    )
// calculationCallback(countCall),[countCall]
    const callHooVar = useCallback(()=> calculation(countCall),[count]);

    const memoizedCallback = useCallback(
        () => {
          doSomething(countCall);
        },
        [countCall],
      );

      const doSomething = ()=>{
          return setCountCall((e)=>e+20)
      }

    // const calculationCallback = ()=>{
    //     setCountCall((e)=>e+20)
    // }

    // const changeCall = ()=>{
    //     setCountCall()
    // }

    return (
        <div className='ranking-container'>
            <h1>{memoData}</h1>
            <button onClick={()=>changeMemo()}>change</button>
            <h1>{countCall}</h1>
            <button onClick={()=>memoizedCallback()}>Call change</button>
            <div className='rank-header-wrapper'>
                <h3 className="ranking-heading">Little Laureates Champions</h3>

                <div className='rank-header'>
                    {chapRender()}
                </div>
                <div className='classchamp-container'>
                    <h4>Class Champs</h4>    
                </div>
            </div>    
        </div>
    )
}

export default Champions;
