import React from "react";


const LearnWithMentor = ({className, batchName, mentorName, totalClass})=>{
    return(
        <div className='learn-mentor-db-container'>
            <h2>I Learn With My Mentor</h2>
            {mentorName?
                <p>({mentorName})</p>
            :null}

            {className?
                <p><strong>Class:</strong> {className}</p>
            :null}
            {batchName?
                <p><strong>Batch:</strong> {batchName}</p> 
            :null}
            
            {totalClass === 0?
                <h2>No Class Scheduled for Today</h2>
            :null}
            
        </div>
    )
}

export default LearnWithMentor;