import { List, Tabs } from "antd";
import TabPane from "antd/lib/tabs/TabPane";
import React, { Fragment } from "react";
import TaskListItem from "../List/TaskListItem";
import AddTaskButton from "../Button/AddTaskButton";
import '../ScrollBar/TaskScrollBar.css'
import UnCompletedList from "../List/UnCompletedList";
import CompletedList from "../List/CompletedList";
const TaskTab = ({
    getUnCompletedMissions,
    getCompletedMissions,
  missionName,
  setMissionName,
  handleAddMission,
}) => {
  return (
    <Fragment>
      <Tabs>
        <TabPane tab="UnCompleted Tasks" key="1">
        
          
            <UnCompletedList getUnCompletedMissions
            ={getUnCompletedMissions} />
            
            <AddTaskButton
              missionName={missionName}
              setMissionName={setMissionName}
              handleAddMission={handleAddMission}
            />
         
        </TabPane>
        <TabPane tab="Completed Tasks" key="2">
        <CompletedList getCompletedMissions={getCompletedMissions} />

        </TabPane>
        <TabPane tab="Stared Tasks" key="3">
          Stared Tasks
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default TaskTab;
