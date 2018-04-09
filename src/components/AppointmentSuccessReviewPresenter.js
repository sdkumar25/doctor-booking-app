import React from 'react'
import { Link } from 'react-router-dom'
import '../css/App.css'

let AppointmentSuccessReviewPresenter = (props) => {
    return (
        <div className="container">
            <div>
                <h1>Appointment booked successfully!</h1>
            </div>
            <div>
                <p><span className="title">Doctor Name: </span>{props.appointmentData.Doctor.Name}</p>
                <p><span className="title">Date: </span>{props.appointmentData.AppointmentDate}</p>
                <p><span className="title">Time: </span>{props.appointmentData.AppointmentTime}</p>
                <p><span className="title">Patient Name: </span>{props.appointmentData.PatientName}</p>
                <p><span className="title">Patient Contact Number: </span>{props.appointmentData.PatientContactNo}</p>
                <p><span className="title">Notes: </span>{props.appointmentData.Notes}</p>
            </div>
            <Link to="/">Book another appointment</Link>
        </div>
    )
}
export default AppointmentSuccessReviewPresenter