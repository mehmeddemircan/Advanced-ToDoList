import { Button, Tooltip } from "antd";
import React, { Fragment } from "react";

const MenuBarStepButton = ({step,handleDeleteStep,handleShowEditForm}) => {
  return (
    <Fragment>
  
       <Tooltip 
                placement="bottom"
             title={
               <ul class="list-group">
                 <button
                  
                   type="button"
                   class="btn btn-link btn-sm"
                   style={{ color: "#fff" }}
              onClick={() => handleDeleteStep(step.id)}
                 >
                   Delete  {step.id}
                 </button>
                 <button
                   type="button"
                   class="btn btn-link btn-sm"
                   style={{ color: "#fff" }}
                   onClick={handleShowEditForm}
                 >
                   Edit 
                 </button>
               </ul>
             }
             trigger="click"
           >
             <Button
               type='text'
               shape="circle"
               icon={<i class="fa-solid fa-ellipsis-vertical"></i>}
             />
           </Tooltip>
    </Fragment>
  );
};

export default MenuBarStepButton;
