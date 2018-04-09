import _ from 'lodash'
import moment from 'moment'

const doctorsData = require('../data/doctors.json');
let appointmentData = { Doctor : {}, DoctorName: "", Specialist: "", AppointmentDate:"", AppointmentTime: "", PatientName: "", PatientContactNo: "", Notes:"" };

const doctors = (state = { doctorsData: doctorsData, filteredDoctors: [], appointmentData: appointmentData }, action) => {
    switch(action.type) {
        case 'Filter_Doctor_By_Specialist':
            var filteredDoctors = _.map(doctorsData, function(o) {
                if (o.Speciality === action.selectedSpeciality) return o;
            });
            // Remove undefines from the array
            filteredDoctors = _.without(filteredDoctors, undefined)
            return Object.assign({}, state, {
                filteredDoctors: filteredDoctors
            });
        case 'Set_Speciality_And_Doctor':
            appointmentData.Specialist = action.specialityAndDoctorObj.Specialist.Speciality;
            appointmentData.Doctor = action.specialityAndDoctorObj.Doctor;
            return Object.assign({}, state, {
                appointmentData: appointmentData
            });
        case 'Submit_Appointment_Form':
            let appointmentDataObj = action.formValues;
            appointmentData.AppointmentDate = appointmentDataObj.appointmentDate;
            appointmentData.AppointmentTime = appointmentDataObj.timeSlot;
            appointmentData.PatientName = appointmentDataObj.patientName;
            appointmentData.PatientContactNo = appointmentDataObj.patientContactNo;
            appointmentData.Notes = appointmentDataObj.notes;
            return Object.assign({}, state, {
                appointmentData: appointmentData
            });
        default:
            return state
    }
}

export default doctors