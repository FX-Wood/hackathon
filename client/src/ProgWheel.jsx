import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';

const ProgWheel = ({progress}) => {
    console.log('in progwheel', progress)
    return (
        <div className="ProgWheel">
        <h3>Circular progress bar</h3>
            <CircularProgressbar percentage={60} />
        </div>
    )
}


export default ProgWheel;