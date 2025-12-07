import React, { useState } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {

  const [selectId, setSelectId] = useState(0)
  const handleChange = (e) =>{
    setSelectId(e.target.value)
  }
  const handleSubmit = () =>{
    if(selectId === 0){
      alert("Please select a patient name")
    }
    setId(selectId)
  }
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={handleChange}>
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((record)=>(
            <option key={record.data[0].userId} value={record.data[0].userId}>{record.data[0].userName}
            </option>
          ))}
          
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleSubmit}>
        Show
      </button>
    </div>
  );
}

export default Search;
