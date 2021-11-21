import '../App.css';
import Card from './Card';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './UserPage';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(res => res.json())
      .then(data => {
        let arr = [];
        arr = data.map(user => ({ ...user, status: 'Pending' }))
        setData(arr);
      })
  }, [])

  const handleStatus = (idx, status) => {
    let tempData = data;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id === idx) {
        tempData[i].status = status;
      }
    }
    setData(tempData);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home data={data} filter={'all'} />} />
          <Route exact path='/shortlisted' element={<Home data={data} filter={'shortlisted'} />} />
          <Route exact path='/rejected' element={<Home data={data} filter={'rejected'} />} />
          <Route exact path='/:id' element={<UserPage handleStatus={handleStatus} data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
