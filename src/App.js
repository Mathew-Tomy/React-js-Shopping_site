import './App.css';


import React from "react";
import ContextAllPost from "./contextStore/AllPostContext";
import ContextAuth from "./contextStore/AuthContext";
import ContextPost from "./contextStore/PostContext";
import MainRoutes from './MainRoutes';

function App() {

  return (
    <div>
         <ContextAuth>
        <ContextAllPost>
          <ContextPost>
            <MainRoutes />
          </ContextPost>
        </ContextAllPost>
      </ContextAuth>
    </div>
  
    );
  
}

export default App;