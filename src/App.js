import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {

  const [id, setId] =useState(0)

  //console.log(id)

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setId={setId}/>
        {id === 0?"":<Records key={id} id={id} />}
        
      </div>
    </div>
  );
};

export default App;
