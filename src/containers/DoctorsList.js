import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DoctorsPresenter from '../components/DoctorsPresenter'
import { setSpecialistAndDoctor } from '../actions/Doctors.Action'
const mapStateToProps = (state) => {
    let selectedSpeciality = state.specialities.selectedSpeciality;
    let filteredDoctor = state.doctors.filteredDoctors;
    return {
        selectedSpeciality: selectedSpeciality,
        filteredDoctor: filteredDoctor
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSpecialistAndDoctor
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DoctorsPresenter);