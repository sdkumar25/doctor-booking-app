import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppointmentSuccessReviewPresenter from '../components/AppointmentSuccessReviewPresenter'

const mapStateToProps = (state) => {
    let appointmentData = state.doctors.appointmentData;
    return {
        appointmentData: appointmentData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        bookAnotherAppointment: () => dispatch(push('/'))
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentSuccessReviewPresenter);