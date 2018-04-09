import React from 'react'
import '../css/Doctors.css'

const DoctorDetail = ({ doctorObj }) => (
    <div>
        <div>
            <h1>{doctorObj.Name}</h1>
            <p>{doctorObj.HospitalName}, {doctorObj.Location}</p>
        </div>
        <p><span className="title">Branch: </span>{doctorObj.Branch}</p>
        <p><span className="title">Experience: </span>{doctorObj.Experience}</p>
        <p><span className="title">Amount: </span>{doctorObj.Amount}</p>
    </div>
)

export default DoctorDetail