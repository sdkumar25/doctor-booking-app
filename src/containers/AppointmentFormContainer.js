import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppointmentFormPresenter from '../components/AppointmentFormPresenter'
import { submitAppointmentForm } from '../actions/Doctors.Action'

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
        submitAppointmentForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentFormPresenter);