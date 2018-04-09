import React from 'react'
import DoctorRow from './DoctorRow'



const DoctorsPresenter = ({ selectedSpeciality, filteredDoctor, setSpecialistAndDoctor }) => (

   <div className="container">
        <div>
            <h1>Choose Doctor</h1>
        </div>
        <div>
            <p>Applied filter: <span className="title">{selectedSpeciality.Speciality !== "" ? selectedSpeciality.Speciality :"None"}</span></p>
            <ul>
                {filteredDoctor.map(d => 
                    <DoctorRow key={d.Id} doctorObj = {d} setSpecialistAndDoctor = {() => setSpecialistAndDoctor({ Specialist: selectedSpeciality, Doctor: d })}/>
                )}
            </ul>
        </div>
    </div>
)

export default DoctorsPresenter