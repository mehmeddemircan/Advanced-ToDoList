import React, { Fragment, useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AllGroup } from "../../redux/Actions/GroupAction";

const MainLayout = (props) => {
  const auth = useSelector((state) => state.auth);

  const getSingleGroup = useSelector((state) => state.getSingleGroup);

  return (
    <Fragment>
      {/* Header */}

      <div class="row w-100">
        <Sidebar auth={auth} />
    
        <div class="mt-5 col-md-9" style={{backgroundImage : getSingleGroup.success ? (
          getSingleGroup.group.data == null ? "" : getSingleGroup.group.data
              .theme != null ? (
                `url(${getSingleGroup.group.data.theme.backgroundImage})`
          ) : (
           ""
          )
        ) : "" ,
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover'
        
        }} >
            
          {props.children}</div>
      </div>

      {/* Footer */}
    </Fragment>
  );
};

export default MainLayout;
