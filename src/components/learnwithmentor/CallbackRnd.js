import React, {useState, useCallback, useMemo} from 'react';
import List from './List';

const CallbackRnd = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    // const [items, setItem] = useState([]);

    const getItem = useCallback(()=>{
        return [number, number +1, number + 2];
    },[number])

    const theme = {
        backgroundColor: dark? '#222':'#fff',
        color: dark? '#fff': '#222',
        padding: '20px'
    }
    
    const changeNumber = (value)=>{
        if(value){
            setNumber(parseInt(value))
        }else{
            setNumber(parseInt(0))
        }
    }

    // const renderList = ()=>(
    //     items.map((item, i) => <div key={i}>{item}</div>)
    // )

    const randamMemo = ()=>{
        return Math.random().toFixed(2);
    }
    const rM = useMemo(randamMemo, []);

    var b = Math.random().toFixed(2);
    const randamCall = (a = b)=>{
        return a
    }

    const rC = useCallback(randamCall, [])

    return (
        <div style={theme}>
            <h1>{Math.random().toFixed(2)} Memo {rM} Callback {rC()}</h1>
            <input 
                type="number"
                value={number}
                onChange={(e)=> changeNumber(e.target.value)}
            />
            <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle Theme</button>

            <List getItem={getItem} />
            {/* {renderList()} */}
        </div>
    )
}

export default CallbackRnd;
