import { Button, Modal } from "antd";
import React, { Fragment, useState } from "react";

const NewListModal = ({ handleCancelNewListModal, showNewListModal }) => {

    const [groupName, setGroupName] = useState("")

  return (
    <Fragment>
      <Modal
        title="Add New List"
        centered
        open={showNewListModal}
        onOk={handleCancelNewListModal}
        onCancel={handleCancelNewListModal}
        footer={[
            <button
            class="btn btn-primary"
            onClick={handleCancelNewListModal}
         
            disabled={groupName === "" ? true : false}
          >
            Create
          </button>,
        ]}
      >
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">
              List Name{" "}
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default NewListModal;
