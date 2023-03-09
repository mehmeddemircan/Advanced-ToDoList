import { List } from "antd";
import React, { Fragment, useState } from "react";
import MenuBarStepButton from "../Button/MenuBarStepButton";
import { useDispatch, useSelector } from "react-redux";
import { DeleteStep, UpdateStep } from "../../redux/Actions/StepAction";
import { toast } from "react-toastify";

const StepListItem = ({ step }) => {
  const [id, setId] = useState(step.id);
  const [stepText, setStepText] = useState(step.stepText);
  const [isCompleted, setIsCompleted] = useState(step.isCompleted);

  const [showEditForm, setShowEditForm] = useState(false);

  const stepUpdateDelete = useSelector((state) => state.stepUpdateDelete);

  const dispatch = useDispatch();

  const handleDeleteStep = () => {
    dispatch(DeleteStep(step.id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(UpdateStep({ id, stepText, isCompleted }));
      if (stepUpdateDelete.updated.success) {
        toast(stepUpdateDelete.updated.message);
      }
    }
  };
  const handleShowEditForm = () => {
    setShowEditForm(true);
  };

  return (
    <Fragment>
      <List.Item
        key={step.id}
        actions={[
          <MenuBarStepButton
            key={step.id}
            step={step}
            showEditForm={showEditForm}
            handleDeleteStep={handleDeleteStep}
         
            handleShowEditForm={handleShowEditForm}
          />,
        ]}
      >
        <div className="d-flex flex-column">
          {showEditForm ? (
            <div className="d-flex   justify-content-between">
              <input
                className="form-control mx-2"
                value={stepText}
                onChange={(e) => setStepText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div>
                {" "}
                <i
                  class="fa-solid fa-x"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    toast("basariyla kapandı");
                    setShowEditForm(false);
                  }}
                ></i>
              </div>
            </div>
          ) : (
            <>
              <div>
                {" "}
                <h6 className="mx-2">{step.stepText}</h6>
              </div>
            </>
          )}
          <a className="mx-2">
            Ant Design, a design language for background applications, is
            refined by Ant UED Team
          </a>
        </div>
      </List.Item>
    </Fragment>
  );
};

export default StepListItem;
