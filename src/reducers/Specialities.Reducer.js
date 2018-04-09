const specialitiesData = require('../data/specialities.json')
const branchesData = specialitiesData.branches;

const specialities = (state = { specialitiesData: specialitiesData, branchesData: branchesData, showDoctor: false, selectedSpeciality: "" }, action) => {
    switch(action.type) {
        case 'Select_Speciality':
            return Object.assign({}, state, {
                selectedSpeciality: action.speciality
            })
        default:
            return state
    }
}

export default specialities