import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SpecialitiesPresenter from '../components/SpecialitiesPresenter'
import { selectSpeciality } from '../actions/Specialities.Action'

const mapStateToProps = (state) => {
    let specialities = state.specialities.specialitiesData;
    return {
        specialities: specialities
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectSpeciality
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialitiesPresenter);