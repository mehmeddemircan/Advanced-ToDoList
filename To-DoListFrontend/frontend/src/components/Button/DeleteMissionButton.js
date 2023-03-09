import React, { Fragment } from "react";

const DeleteMissionButton = () => {
  return (
    <Fragment>
      <div className=" d-flex justify-content-between">
        <button
          style={{ position: "fixed", bottom: 0 }}
          className="btn btn-light mb-3 "
        >
          <i class="fa-solid fa-trash "></i>
          <a className="mx-2">Delete</a>
        </button>
      </div>
    </Fragment>
  );
};

export default DeleteMissionButton;
