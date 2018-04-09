import React from 'react'
import '../css/Specialities.css'

const SpecialityRow = ({ specialityObj, selectSpeciality }) => (
    <li className="specialistRow" onClick={() => selectSpeciality(specialityObj)}>
        <p className="bold">{specialityObj.Speciality}</p>
        {specialityObj.Branches.map((b, i) => <React.Fragment key={i}>
            {i > 0 && ", "}{b.Branch}
        </React.Fragment>)}
    </li>
)
export default SpecialityRow