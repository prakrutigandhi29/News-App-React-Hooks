import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

const App =()=> {

  const apiKey=process.env.REACT_APP_NEWS_APIKEY;
  
    return (
      <Router>
    
        <NavBar/>
        <div className='container my-5'>
        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize="10" apiKey={apiKey} country="in" category="general" />}/>
          <Route exact path="/sports"  element={<News key="sports" pageSize="10" apiKey={apiKey} country="in" category="sports" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize="10" apiKey={apiKey} country="in" category="entertainment" />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize="10" apiKey={apiKey} country="in" category="technology" />}/>
      </Routes>
      </div>
      </Router>
    )
  
}



export default App;
