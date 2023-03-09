import { List } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import StepListItem from "./StepListItem";
import { useDispatch, useSelector } from "react-redux";
import { AddStep, AllStep } from "../../redux/Actions/StepAction";
import { ADD_STEP_RESET, DELETE_STEP_RESET, UPDATE_STEP_RESET } from "../../redux/Constants/StepConstants";
import "../ScrollBar/StepScrollBar.css";
import { toast } from "react-toastify";
import MenuBarStepButton from "../Button/MenuBarStepButton";
const StepList = ({ getAllStep, mission, missionId }) => {
  const [showInputStep, setShowInputStep] = useState(false);

  const { success } = useSelector((state) => state.addNewStep);
  const addNewStep = useSelector((state) => state.addNewStep);
  const {deleted,updateSuccess} = useSelector((state) => state.stepUpdateDelete);
  const [stepText, setStepText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleShowInputStep = () => {
    setShowInputStep((prev) => !prev);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(AddStep({ missionId, stepText, isCompleted }));
      if (addNewStep.step.success) {
        toast(addNewStep.step.message);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: ADD_STEP_RESET });
    }
    if (deleted) {
      dispatch({type:DELETE_STEP_RESET})
    }
    if (updateSuccess) {
      dispatch({type:UPDATE_STEP_RESET});
    }
    if (success || deleted || updateSuccess) {
      dispatch(AllStep(missionId));
    }
  }, [success,deleted,updateSuccess]);

  return (
    <Fragment>
      <h6 className="my-3">Steps {missionId}</h6>
      <hr />

      <div
        className="scrollbar-ripe-malinka"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <List class="my-4" itemLayout="horizontal">
          {getAllStep.steps.data.map((step) => (
            <StepListItem key={step.id} step={step} />
          ))}
        </List>
      </div>
      {showInputStep ? (
        <div>
          <input
            onKeyDown={handleKeyDown}
            className="form-control my-2"
            placeholder="text a step"
            value={stepText}
            onChange={(e) => setStepText(e.target.value)}
          />
        </div>
      ) : null}
      <button
        type="button"
        class="btn btn-light w-100 text-left"
        onClick={handleShowInputStep}
      >
        {showInputStep ? (
          "Cancel"
        ) : (
          <>
            <i class="fa-solid fa-plus mx-2"></i>
            <a>Add Step</a>{" "}
          </>
        )}
      </button>
    </Fragment>
  );
};

export default StepList;
