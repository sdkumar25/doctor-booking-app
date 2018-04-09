import React from 'react'

const AppointmentSuccessReviewPresenter = ({ appointmentData, bookAnotherAppointment }) => (
   <div className="container">
        <div>
            <h1>Appointment booked successfully!</h1>
        </div>
        <div>
          <p>{appointmentData.DoctorName}</p>
        </div>
    </div>
)

export default AppointmentSuccessReviewPresenter