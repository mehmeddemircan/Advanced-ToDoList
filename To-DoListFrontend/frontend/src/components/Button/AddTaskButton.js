import { Button } from "antd";
import React, { Fragment, useState } from "react";

const AddTaskButton = ({missionName,setMissionName,handleAddMission}) => {
  // const [openInput, setOpenInput] = useState(false);
 

  return (
    <Fragment>
      <div class="my-3 d-flex justify-content-between">
        <input
          type="text"
          class="form-control"
          value={missionName}
          onChange={(e) => setMissionName(e.target.value)}
          placeholder="Add Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* düzenleme yapılacak ekle butonunda input null olmazsa düzenlenecek  */}

        <button
          class="btn btn-outline-primary rounded-pill mx-2 "
          style={{ visibility: missionName === "" ? "hidden" : "visible" }}
          onClick={handleAddMission}
        >
          {" "}
          Ekle
        </button>
      </div>
    </Fragment>
  );
};

export default AddTaskButton;
