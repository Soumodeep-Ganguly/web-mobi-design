import React, { useState }from 'react';
import TopNav from './components/TopNav'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import Audience from './components/Audience'
import './App.css';

function App() {
  const [active, setActive] = useState('event');
  return (
    <div>
      <LeftSideBar 
        active={active}
        setActive={setActive}
      />
      <div className="flex-grow-1" style={{ zIndex: "-1" }}>
        <div className="row">
          <TopNav />
        </div>
        <div className="row bgSecondary vh-100 p-3">
          <div className="innerContainer">
            <div className="row">
              <div className="col-2 border-right">
                <h5 className="border-bottom pb-3 mt-3">Event settings</h5>
                <ul>
                  <li>
                    <a href="#general" className="">General</a>
                  </li>
                  <li>
                    <a href="#privacy" className="">Privacy</a>
                  </li>
                  <li>
                    <a href="#features" className="active">Features</a>
                  </li>
                  <li>
                    <a href="#customization" className="">Customization</a>
                  </li>
                  <li>
                    <a href="#integration" className="">Integration</a>
                  </li>
                  <li>
                    <a href="#session" className="">Session Settings</a>
                  </li>
                  <li>
                    <a href="#plans" className="">My Plans</a>
                  </li>
                </ul>
              </div>
              <div className="col-10">
                  <Audience />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar 
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default App;
