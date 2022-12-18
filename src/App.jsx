import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'

import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from "./components/AddTask";
import Header from "./components/header";
import Home from './Home';
import TaskDetails from "./components/TaskDetails";

const App = () => {

  return (
      <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="/:TaskTitle" element={<TaskDetails />}/>
            </Routes>
          </div>
      </ Router>
  )
}

export default App