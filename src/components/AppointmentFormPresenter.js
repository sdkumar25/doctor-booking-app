import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import RenderDatePicker from './DatePicker'
import '../css/AppointmentForm.css'

let AppointmentFormPresenter = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Appointment Form</h1>
      </div>
      <div>
        <label>Specialist</label>
        <div>
           <Field name="specialist" component="select">
              {props.specialities.map(s => 
                  <option key={s.Id} value={s.Speciality}>{s.Speciality}</option>
              )}          
          </Field>
        </div>
      </div>
      <div>
        <label>Doctor Name</label>
        <div>
          <Field name="doctorName" component="input" type="text" placeholder="Doctor Name"/>
        </div>
      </div>
      <div>
        <label>Appointment Date</label>
        <div>
          <Field name="appointmentDate" component={RenderDatePicker} />
        </div>
      </div>
      <div>
        <label>Time Slot</label>
        <div>
            <Field name="timeSlot" component="select">
              <option></option>
              {props.doctorObj.AvailableTimeSlots.map(ts => 
                  <option key={ts.Id} value={ts.TimeSlot}>{ts.TimeSlot}</option>
              )}   
            </Field>
        </div>
      </div>
      <div>
        <label>Patient Name</label>
        <div>
          <Field name="patientName" component="input" type="text" placeholder="Patient Name"/>
        </div>
      </div>
       <div>
        <label>Contact Number</label>
        <div>
          <Field name="patientContactNo" component="input" type="text" placeholder="Contact Number"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

function mapStateToProps(state, props) {
  return { 
    initialValues: { doctorName: props.doctorObj.Name, specialist: props.speciality },
    onSubmit : props.submitAppointmentForm
  }
}
AppointmentFormPresenter = reduxForm({
    form: 'AppointmentForm'
}, mapStateToProps)(AppointmentFormPresenter)

export default connect(mapStateToProps)(AppointmentFormPresenter);

