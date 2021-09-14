import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InterFace from './components/interface-component';
import DashBoard from './components/dashboard-component';


function App() {
  return (
    <div className="container-fluid dashboard-container">
      <div className="row">
        <div className="col-2 interface-component">
          <InterFace/>
        </div>
        <div className="col-9 interface-component dashboard-component">
          <DashBoard/>
        </div>       
      </div>
    </div>
  );
}

export default App;