import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import GetRequest from './components/GetRequest';
import EmployeeSameProject from './components/EmployeeSameProject';

const App = () => (
  <div className='Allthings'>
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4' style={{ "font-size": '15px' }}>
        {/*<i className='fab fa-react' />*/} Here you can upload a file
      </h4>
      <FileUpload />
      <div>
        <GetRequest />
      </div>
      <div>
        <EmployeeSameProject />
      </div>
    </div>
  </div>
);

export default App;