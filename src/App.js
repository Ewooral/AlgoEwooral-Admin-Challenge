import "./App.css"
import React, { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                    <TooltipComponent content="settings" position="Top">
                        <button>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {activeMenu ? 
                (
                    <div className="w-72 fixed sidebar dark:big-secondary-dark-big bg-white">
                        Sidebar
                    </div>
                ) : 
                
                (
                    <div>
                        Sidebar w-0
                    </div>
                )}
            </div>

        </BrowserRouter>
    </div>
  )
}

export default App