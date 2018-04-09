import React from 'react'
import '../css/App.css'

let AppointmentSuccessReviewPresenter = (props) => {
    return (
    <div className="container">
            <div>
                <h1>Appointment booked successfully!</h1>
            </div>
            <div>
                <p><span class="title">Doctor Name: </span>{props.appointmentData.Doctor.Name}</p>
                <p><span class="title">Date: </span>{props.appointmentData.AppointmentDate}</p>
                <p><span class="title">Time: </span>{props.appointmentData.AppointmentTime}</p>
                <p><span class="title">Patient Name: </span>{props.appointmentData.PatientName}</p>
                <p><span class="title">Patient Contact Number: </span>{props.appointmentData.PatientContactNo}</p>
                <p><span class="title">Notes: </span>{props.appointmentData.Notes}</p>
            </div>
        </div>
    )
}
export default AppointmentSuccessReviewPresenter