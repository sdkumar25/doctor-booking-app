import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppointmentFormPresenter from '../components/AppointmentFormPresenter'
import { submitAppointmentForm } from '../actions/Doctors.Action'
import { SubmissionError } from 'redux-form'

export function sumbitForm(values){
      if (!values.appointmentDate) {
        throw new SubmissionError({ _error: 'Appointment date is required' });
      } else if (!values.doctorName) {
        throw new SubmissionError({ _error: 'Doctor name is required' });
      } else if (!values.patientContactNo) {
        throw new SubmissionError({ _error: 'Contact number is required' });
      } else if (!values.patientName) {
        throw new SubmissionError({ _error: 'Patient name is required' });
      } else if (!values.specialist) {
        throw new SubmissionError({ _error: 'Specialist is required' });
      } else if (!values.timeSlot) {
        throw new SubmissionError({ _error: 'Time slot is required' });
      } else {
        return(dispatch=> {
            dispatch(submitAppointmentForm(values))
        });
      }       
}
const mapStateToProps = (state) => {
    let speciality = state.doctors.appointmentData.Specialist,
        doctorObj = state.doctors.appointmentData.Doctor,
        specialities = state.specialities.specialitiesData
    return {
        speciality: speciality,
        doctorObj: doctorObj,
        specialities: specialities
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sumbitForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentFormPresenter);