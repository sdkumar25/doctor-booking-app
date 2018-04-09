import React from 'react'
import SpecialityRow from './SpecialityRow'
import "../css/Specialities.css"

const SpecialitiesPresenter = ({ specialities, selectSpeciality }) => (
    <div className="container">
        <div>
            <h1>Choose specialist</h1>
            <ul>
                {specialities.map(s => 
                    <SpecialityRow key={s.Id} specialityObj = {s} selectSpeciality = {selectSpeciality}/>
                )}
            </ul>
        </div>
    </div>
)

export default SpecialitiesPresenter