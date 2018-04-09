import { push } from 'react-router-redux'
export const filterDoctorBySpecialist = (selectedSpeciality) => {
    return {
        type: 'Filter_Doctor_By_Specialist',
        selectedSpeciality: selectedSpeciality
    }
}

export const setSpecialistAndDoctor = (specialityAndDoctorObj) => {
      return (dispatch) => {
        dispatch({ type: 'Set_Speciality_And_Doctor', specialityAndDoctorObj: specialityAndDoctorObj });
        dispatch(push('/appointmentForm'));
    }; 
}

export const submitAppointmentForm = (formValues) => {
     return (dispatch) => {
        dispatch({ type: 'Submit_Appointment_Form', formValues: formValues });
        dispatch(push('/appointmentSuccessReview'));
    }; 
}