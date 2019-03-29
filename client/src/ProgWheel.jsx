import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';

const ProgWheel = ({progress}) => {
    return (
        <div className="ProgWheel">
            <CircularProgressbar percentage={progress} />
        </div>
    )
}


export default ProgWheel;