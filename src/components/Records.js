import React, { useEffect, useState } from "react";
import medical_records from "../medicalRecords";

function Records({ id }) {
  const [patientId, setPatientId] = useState(Number(id))
  const [patientRecord, setPatientRecord] = useState([])
  //console.log(medical_records.length)

  useEffect(()=>{
    //console.log(patientId)
    const filterPatientRecord = medical_records?.filter((record)=>record?.data[0].userId === patientId)[0].data
    //console.log(filterPatientRecord)
    setPatientRecord(filterPatientRecord)
  },[patientId])

  const handleNext = () =>{
    //console.log(patientId)
    if(patientId === medical_records.length){
      setPatientId(1)
    }
    else{
      setPatientId(patientId + 1)
    }
  }

  //console.log(patientRecord)

  return (
    
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{patientRecord[0]?.userName}</h4>
          <h5 id="patient-dob">DOB: {patientRecord[0]?.userDob}</h5>
          <h5 id="patient-height">Height: {patientRecord[0]?.meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" onClick={handleNext} data-testid="next-btn">
          Next
        </button>
      </div>
      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {patientRecord?.map((record, i)=>(
            <tr key={record.id}>
            <td>{i+1}</td>
            <td>{new Date(record.timestamp).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</td>
            <td>{record.diagnosis.name}</td>
            <td>{record.meta.weight}</td>
            <td>{record.doctor.name}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
}

export default Records;
