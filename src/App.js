import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './app.css';


const Sidebar = () => {
  return (
    <div>
      <h2>Sidebar</h2>
    </div>
  );
};

const app = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div>
              <Sidebar />
            </div>
          ) : (
            <div>
              
              <Sidebar w-0 />
            </div>
          )}
            <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar ">
            Navbar
            </div>
          </div>
        </div>
      </BrowserRouter>
      
    </div>
  );
};

export default app;
