import React, { Fragment } from 'react'

const AddStepButton = ({mission}) => {
    // group düzenleme kısmı 
  return (
        <Fragment>
                    <div class="d-flex justify-content-between">
        <input
          type="text"
          class="form-control"
          defaultValue={mission.missionName}
        //   value={}
         // onChange={(e) => setMissionName(e.target.value)}
          placeholder="Add Step"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
         />
          
  
        {/* düzenleme yapılacak ekle butonunda input null olmazsa düzenlenecek  */}

        <button
          class="btn btn-outline-primary rounded-pill mx-2 "
        //   style={{ visibility: missionName === "" ? "hidden" : "visible" }}
        //   onClick={handleAddMission}
        >
          {" "}
          Ekle
        </button>
      </div>
        </Fragment>
  )
}

export default AddStepButton