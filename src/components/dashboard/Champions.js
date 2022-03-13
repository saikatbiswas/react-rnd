import React from 'react'

const Champions = ({items})=> {

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

    return (
        <div className='ranking-container'>
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
