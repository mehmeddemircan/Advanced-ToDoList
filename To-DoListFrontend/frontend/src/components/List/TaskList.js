import { List } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskListItem from "./TaskListItem";
import AddTaskButton from "../Button/AddTaskButton";
import ListTitle from "../Title/ListTitle";
import { AddMission } from "../../redux/Actions/MissionAction";
import { ADD_MISSION_RESET } from "../../redux/Constants/MissionConstants";
import NoDataPage from "../../pages/NoDataPage";
import "../ScrollBar/TaskScrollBar.css";
import TaskTab from "../Tabs/TaskTab";
import { AllTheme } from "../../redux/Actions/ThemeAction";
const TaskList = () => {
  const getSingleGroup = useSelector((state) => state.getSingleGroup);
  const [groupId, setGroupId] = useState(0);
  const [missionName, setMissionName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const getUnCompletedMissions = useSelector((state) => state.getUnCompletedMissions)
  const getCompletedMissions = useSelector((state) => state.getCompletedMissions)
  const getAllTheme = useSelector((state) => state.getAllTheme)

  const { success } = useSelector((state) => state.addNewMission);
  const dispatch = useDispatch();

  const handleAddMission = () => {
    dispatch(AddMission({ groupId, missionName, isCompleted }));
    
    
  };

  useEffect(() => {
    setGroupId(
      getSingleGroup.group.data == null ? 0 : getSingleGroup.group.data.id
    );

    if (success) {
      setMissionName("");
      dispatch({ type: ADD_MISSION_RESET });
    }
  }, [getSingleGroup,success]);

  useEffect(() => {
    dispatch(AllTheme())
  }, [])

  return (
    <Fragment>
      {getSingleGroup.group.data != null ? (
        <div >
       
          <ListTitle getSingleGroup={getSingleGroup} getAllTheme={getAllTheme} />
          <TaskTab
            getCompletedMissions={getCompletedMissions}
            getUnCompletedMissions={getUnCompletedMissions}
            missionName={missionName}
            setMissionName={setMissionName}
            handleAddMission={handleAddMission}
          />
       
        </div>
      ) : (
        <NoDataPage />
      )}
    </Fragment>
  );
};

export default TaskList;
