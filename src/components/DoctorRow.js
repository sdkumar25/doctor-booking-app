import React from 'react'
import DoctorDetail from './DoctorDetail'
import '../css/Doctors.css'

const DoctorRow = ({ doctorObj, setSpecialistAndDoctor }) => (
    <li className="doctorRow">
      <DoctorDetail doctorObj = {doctorObj}/>
      <button onClick={setSpecialistAndDoctor} className="button">Book</button>
    </li>
)

export default DoctorRow