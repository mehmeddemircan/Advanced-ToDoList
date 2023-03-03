import React, { Fragment } from "react";

import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";


const MainLayout = (props) => { 

  const auth = useSelector((state) => state.auth)


  return (
    <Fragment>
      {/* Header */}

      <div class="row w-100" >
   
        <Sidebar auth={auth}/>
      
        <div class="mt-5 col-md-9">
          
          {props.children}
        
        </div>
      </div>

      {/* Footer */}
    </Fragment>
  );
};

export default MainLayout;
