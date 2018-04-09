import { push } from 'react-router-redux'
export const selectSpeciality = (speciality) => {
    return (dispatch) => {
        dispatch({ type: 'Select_Speciality', speciality: speciality });
        dispatch({ type: 'Filter_Doctor_By_Specialist', selectedSpeciality: speciality.Speciality });
        dispatch(push('/doctors'));
    };
}